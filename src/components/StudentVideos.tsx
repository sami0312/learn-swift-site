import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Play, Award, Users } from "lucide-react";

const StudentVideos = () => {
  const [videos, setVideos] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newVideos = Array.from(e.dataTransfer.files).filter(file => 
        file.type.startsWith('video/')
      );
      setVideos(prev => [...prev, ...newVideos]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newVideos = Array.from(e.target.files).filter(file => 
        file.type.startsWith('video/')
      );
      setVideos(prev => [...prev, ...newVideos]);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Student Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our students celebrate their driving test passes! Upload your own success video to inspire others.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  Share Your Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive
                      ? "border-primary bg-primary/10"
                      : "border-muted-foreground/25 hover:border-primary/50"
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Upload Your Success Video</p>
                  <p className="text-muted-foreground mb-4">
                    Drag and drop your video here, or click to select
                  </p>
                  <input
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    id="video-upload"
                  />
                  <Button asChild>
                    <label htmlFor="video-upload" className="cursor-pointer">
                      Choose Videos
                    </label>
                  </Button>
                </div>
                
                {videos.length > 0 && (
                  <div className="mt-4">
                    <p className="font-medium mb-2">Uploaded Videos:</p>
                    <ul className="space-y-1">
                      {videos.map((video, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Play className="h-4 w-4" />
                          {video.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Success Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-success" />
                  Our Success Rate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-success mb-2">95%</div>
                  <p className="text-muted-foreground">First Time Pass Rate</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <p className="text-sm text-muted-foreground">Students Passed</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-1">4.9★</div>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Join our community of successful drivers</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Success Videos Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Student Success Video #{i}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm font-medium">Congratulations Sarah!</p>
                  <p className="text-xs text-muted-foreground">Passed first time with Yan's Driving Lessons</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentVideos;