import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Download, ExternalLink, Clock } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Complete Guide to Learning to Drive in the UK",
      description: "Everything you need to know about learning to drive, from getting your provisional licence to passing your test.",
      icon: BookOpen,
      type: "Guide",
      readTime: "15 min read",
      popular: true
    },
    {
      id: 2,
      title: "Can You Learn to Drive in Your Own Car?",
      description: "Explore the pros and cons of learning in your own vehicle versus using an instructor's car.",
      icon: FileText,
      type: "Article",
      readTime: "8 min read",
      popular: false
    },
    {
      id: 3,
      title: "Mock Driving Tests",
      description: "Practice your theory and hazard perception with our free online mock tests.",
      icon: Video,
      type: "Interactive",
      readTime: "30 min test",
      popular: true
    },
    {
      id: 4,
      title: "What Will My First Driving Lesson Be Like?",
      description: "Nervous about your first lesson? Here's exactly what to expect and how to prepare.",
      icon: FileText,
      type: "Article",
      readTime: "6 min read",
      popular: false
    },
    {
      id: 5,
      title: "Highway Code Updates 2024",
      description: "Stay up to date with the latest changes to the Highway Code and how they affect your driving test.",
      icon: Download,
      type: "PDF",
      readTime: "Download",
      popular: true
    },
    {
      id: 6,
      title: "Dealing with Driving Test Nerves",
      description: "Expert tips and techniques to help you stay calm and confident on your driving test day.",
      icon: BookOpen,
      type: "Guide",
      readTime: "10 min read",
      popular: false
    }
  ];

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Learning Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive library of guides, articles, and tools to support your driving journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <Card key={resource.id} className="course-card group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {resource.popular && (
                      <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="bg-muted px-2 py-1 rounded font-medium">
                      {resource.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{resource.readTime}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {resource.type === 'PDF' ? 'Download' : 'Read More'}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16 bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Need More Help?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team is here to support you every step of the way. Access additional resources and get personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Video Tutorials</h4>
              <p className="text-sm text-muted-foreground">Step-by-step driving guides</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-semibold mb-1">Study Materials</h4>
              <p className="text-sm text-muted-foreground">Theory test preparation</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Progress Tracking</h4>
              <p className="text-sm text-muted-foreground">Monitor your development</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Download className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-semibold mb-1">Free Downloads</h4>
              <p className="text-sm text-muted-foreground">Checklists and guides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;