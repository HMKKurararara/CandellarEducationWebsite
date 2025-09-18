import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, program } = body

    // Basic validation
    if (!name || !email || !phone || !program) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    
    // For now, we'll just log the data
    console.log('New registration:', {
      name,
      email,
      phone,
      program,
      timestamp: new Date().toISOString()
    })

    // TODO: Implement actual form processing
    // - Save to database
    // - Send email notifications
    // - Add to CRM/lead management system

    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
