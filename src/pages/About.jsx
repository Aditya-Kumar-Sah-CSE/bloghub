import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About BlogHub</h1>
          <p className="text-xl text-blue-100">Connecting ideas, sharing knowledge, inspiring communities.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            BlogHub is a modern platform dedicated to bringing together writers, thinkers, and professionals from around the world. We believe in the power of storytelling and the importance of sharing knowledge to foster innovation and personal growth.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to provide a space where anyone can express their ideas, share their expertise, and connect with like-minded individuals who are passionate about learning and growth.
          </p>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Authenticity</h3>
              <p className="text-gray-700">We believe in genuine voices and authentic stories that inspire and create real connections.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-2">Innovation</h3>
              <p className="text-gray-700">We embrace new ideas and cutting-edge thinking to push boundaries and drive progress.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-pink-600 mb-2">Inclusivity</h3>
              <p className="text-gray-700">We welcome diverse perspectives and ensure everyone's voice can be heard and valued.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">Excellence</h3>
              <p className="text-gray-700">We strive for quality in everything we do, from content to user experience.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', bio: 'Tech enthusiast with 10+ years of experience.' },
              { name: 'Michael Chen', role: 'CTO', bio: 'Full-stack developer passionate about modern web technologies.' },
              { name: 'Emma Rodriguez', role: 'Content Lead', bio: 'Skilled storyteller and writing enthusiast.' }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 bg-linear-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose BlogHub?</h2>
          <ul className="space-y-4">
            {[
              'Easy-to-use platform for creating and publishing blog posts',
              'Access to a diverse community of writers and readers',
              'Beautiful, responsive design that works on all devices',
              'Fast loading times and optimized performance',
              'Tools to help you reach your audience effectively',
              'Support for various content categories and topics'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Share Your Story?</h2>
          <p className="text-lg mb-6 text-blue-100">Join our community of writers and start creating meaningful content today.</p>
          <Link to="/create" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Create Your First Blog Post
          </Link>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is it free to use BlogHub?', a: 'Yes, BlogHub is completely free to use. You can create, publish, and share your blogs without any cost.' },
              { q: 'Can I edit my blog posts after publishing?', a: 'Yes, you can edit your published blog posts at any time. Simply navigate to your blog and click the edit button.' },
              { q: 'How do I grow my audience?', a: 'Share your content on social media, engage with other writers, and consistently publish quality content.' },
              { q: 'Is my content safe and secure?', a: 'Yes, we take security seriously and implement industry-standard measures to protect your content and data.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
