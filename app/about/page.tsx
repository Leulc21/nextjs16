import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're passionate about creating amazing experiences and pushing the boundaries of what's possible.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground">
              To deliver exceptional value through innovative solutions and unwavering commitment to excellence.
            </p>
            <Button variant="outline" className="mt-4">
              Learn More
            </Button>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="text-muted-foreground">
              To be at the forefront of technological advancement, creating solutions that make a difference.
            </p>
            <Button variant="outline" className="mt-4">
              Our Projects
            </Button>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Card */}
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-foreground">John Doe</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join us on this exciting journey of innovation and discovery.
          </p>
          <Button size="lg" className="mx-auto">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
