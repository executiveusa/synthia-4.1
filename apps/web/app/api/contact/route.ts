import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, projectType, budget, message } = body

    // Validation
    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // TODO: Integrate with Supabase
    // Example Supabase integration:
    // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)
    // const { error } = await supabase
    //   .from('leads')
    //   .insert([{ name, email, project_type: projectType, budget, message }])
    //
    // if (error) {
    //   return NextResponse.json({ error: 'Database error' }, { status: 500 })
    // }

    // TODO: Integrate with Resend for email notifications
    // Example Resend integration:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Kupuri Studios <onboarding@resend.dev>',
    //   to: 'your-email@kupuri.media',
    //   subject: `New Lead: ${name} - ${projectType}`,
    //   text: `New project inquiry from ${name} (${email}):\n\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`
    // })

    // For now, just log to console (development mode)
    console.log('📧 New contact form submission:', {
      name,
      email,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        name,
        email,
        projectType,
        budget,
      },
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to verify the API is working
export async function GET() {
  return NextResponse.json({
    message: 'Kupuri Studios Contact API',
    version: '1.0.0',
    endpoints: [
      {
        method: 'POST',
        path: '/api/contact',
        description: 'Submit contact form',
        requiredFields: ['name', 'email', 'projectType', 'budget', 'message'],
      },
    ],
  })
}
