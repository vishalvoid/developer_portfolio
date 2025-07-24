"use client";

import React from "react";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "kvishal07860@gmail.com",
      description: "Send me an email anytime",
      link: "mailto:kvishal07860@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8448171017",
      description: "Call me for urgent matters",
      link: "tel:+918448171017",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Noida, India",
      description: "UTC+5:30 timezone",
      link: "#",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "24-48 hours",
      description: "Typical response time",
      link: "#",
      color: "text-purple-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      username: "@vishalvoid",
      url: "https://github.com/vishalvoid",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "vishalvoid",
      url: "https://linkedin.com/in/vishalvoid",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      name: "Twitter",
      username: "@vishal_void",
      url: "https://twitter.com/vishal_void",
      color: "hover:text-blue-400"
    }
  ];

  const faqs = [
    {
      question: "What's the best way to reach you?",
      answer: "Email is the best way to reach me for detailed discussions. For quick questions, you can also connect with me on LinkedIn or Twitter."
    },
    {
      question: "Do you take on freelance projects?",
      answer: "Yes, I'm open to interesting freelance projects, especially those involving modern web technologies like React, Next.js, and Node.js."
    },
    {
      question: "What are your rates?",  
      answer: "My rates vary depending on the project complexity, timeline, and requirements. Let's discuss your project details and I'll provide a fair quote."
    },
    {
      question: "Are you available for full-time positions?",
      answer: "I'm currently focused on my internship at PSS Technologies, but I'm always interested in hearing about exciting opportunities. Feel free to reach out!"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <div className="container py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in new opportunities, exciting projects, or just having a chat about technology. 
              Don't hesitate to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, question, or just say hello!"
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Multiple ways to reach me based on your preference
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent transition-colors">
                      <div className={`p-2 rounded-lg bg-muted ${method.color}`}>
                        <method.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{method.title}</h4>
                        {method.link !== "#" ? (
                          <Link 
                            href={method.link} 
                            className="text-primary hover:underline"
                          >
                            {method.value}
                          </Link>
                        ) : (
                          <p className="text-primary">{method.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect on Social Media</CardTitle>
                  <CardDescription>
                    Follow me for updates and tech discussions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.url}
                        target="_blank"
                        className={`flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.username}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="mt-16">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Common questions and answers to help you get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Ready to Start a Project?</CardTitle>
                <CardDescription>
                  Whether it's a full-stack application, a mobile app, or just a consultation, 
                  I'd love to hear about your ideas and help bring them to life.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild>
                    <Link href="mailto:kvishal07860@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://linkedin.com/in/vishalvoid" target="_blank">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/projects">
                      View My Work
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}