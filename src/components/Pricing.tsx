import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PoundSterling, TrendingDown, Calculator, Award } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no surprises. Just honest, competitive pricing to get you on the road
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Hourly Rates */}
          <Card className="course-card">
            <CardHeader className="text-center">
              <PoundSterling className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Hourly Rates</CardTitle>
              <p className="text-muted-foreground">Pay as you learn with competitive hourly rates</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium">Manual Lessons</span>
                <span className="text-2xl font-bold text-primary">£35/hr</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                <span className="font-medium">Automatic Lessons</span>
                <span className="text-2xl font-bold text-primary">£38/hr</span>
              </div>
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-5 w-5 text-secondary" />
                  <span className="font-semibold text-secondary">Great Value</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our rates are approximately 20% below the UK national average
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Total Cost Breakdown */}
          <Card className="course-card">
            <CardHeader className="text-center">
              <Calculator className="h-12 w-12 text-secondary mx-auto mb-4" />
              <CardTitle className="text-2xl">Total Cost Estimate</CardTitle>
              <p className="text-muted-foreground">Complete breakdown including tests and extras</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>40-hour course (Manual)</span>
                  <span className="font-semibold">£999</span>
                </div>
                <div className="flex justify-between">
                  <span>Theory Test Fee</span>
                  <span className="font-semibold">£23</span>
                </div>
                <div className="flex justify-between">
                  <span>Practical Test Fee</span>
                  <span className="font-semibold">£62</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance (optional)</span>
                  <span className="font-semibold">£45</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Estimated Cost</span>
                  <span className="text-primary">£1,129</span>
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Package Savings</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Save up to £250 when you book our intensive courses compared to individual lessons
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center mb-8">Why Choose Our Packages?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Better Value</h4>
              <p className="text-muted-foreground">
                Intensive courses offer better value per hour compared to individual lessons
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Faster Progress</h4>
              <p className="text-muted-foreground">
                Intensive learning helps you retain skills better and pass your test sooner
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">No Hidden Costs</h4>
              <p className="text-muted-foreground">
                All our prices are transparent with no surprise fees or hidden charges
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-secondary">
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;