import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, BarChart3, Clock, Cog, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>AssetTrack</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Track every asset, anytime, anywhere
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  The complete solution for managing, tracking, and analyzing your personal or company assets in
                  real-time.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1.5">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button size="lg" variant="outline">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full rounded-lg bg-muted/30 md:h-[420px]">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Dashboard Preview
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to manage your assets efficiently
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that's right for you
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "flex flex-col rounded-lg border bg-card shadow-sm",
                  plan.featured && "border-primary shadow-md",
                )}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{plan.description}</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="mr-3 h-5 w-5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup" className="mt-8">
                    <Button className="w-full" variant={plan.featured ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-muted/50 py-16 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Companies Worldwide
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                See what our customers have to say about AssetTrack
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted"></div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16 md:py-24">
          <div className="rounded-lg bg-primary p-8 md:p-12">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl">
                Ready to start tracking your assets?
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] text-primary-foreground/90 md:text-xl">
                Join thousands of companies that use AssetTrack to manage their assets efficiently.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                  >
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>AssetTrack</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Track every asset, anytime, anywhere.</p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} AssetTrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Real-time Tracking",
    description: "Monitor your assets in real-time with live updates and status changes.",
    icon: BarChart3,
  },
  {
    title: "Maintenance Reminders",
    description: "Never miss a maintenance check with automated reminders and alerts.",
    icon: Clock,
  },
  {
    title: "Lifecycle Management",
    description: "Track depreciation and manage the complete lifecycle of your assets.",
    icon: Cog,
  },
  {
    title: "Multi-user Access",
    description: "Collaborate with your team with role-based permissions and access controls.",
    icon: Users,
  },
  {
    title: "Secure Data",
    description: "Your asset data is protected with enterprise-grade security measures.",
    icon: Shield,
  },
  {
    title: "Custom Reports",
    description: "Generate detailed reports and analytics to make informed decisions.",
    icon: BarChart3,
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for individuals and small teams",
    features: ["Up to 100 assets", "Basic reporting", "Email support", "1 user", "CSV export"],
    featured: false,
  },
  {
    name: "Professional",
    price: 79,
    description: "Ideal for growing businesses",
    features: [
      "Up to 1,000 assets",
      "Advanced reporting",
      "Priority support",
      "5 users",
      "API access",
      "Custom fields",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations with complex needs",
    features: [
      "Unlimited assets",
      "Custom reporting",
      "24/7 support",
      "Unlimited users",
      "API access",
      "Custom fields",
      "Dedicated account manager",
      "SSO authentication",
    ],
    featured: false,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Manager, TechCorp",
    quote:
      "AssetTrack has transformed how we manage our IT equipment. The real-time tracking and maintenance alerts have saved us countless hours and prevented costly downtime.",
  },
  {
    name: "Michael Chen",
    role: "Operations Director, LogiTech",
    quote:
      "The reporting features in AssetTrack give us incredible insights into our asset utilization. We've optimized our equipment purchases and saved over 20% on capital expenditures.",
  },
  {
    name: "Emma Rodriguez",
    role: "Fleet Manager, DeliveryPlus",
    quote:
      "Managing our vehicle fleet was a nightmare before AssetTrack. Now we have complete visibility into maintenance schedules, locations, and utilization rates.",
  },
]

