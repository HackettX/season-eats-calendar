import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { getSolarTermById } from '@/data/solarTerms';

const SolarTermDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const term = id ? getSolarTermById(id) : undefined;

  if (!term) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">未找到该节气</p>
          <Button onClick={() => navigate(-1)} className="mt-4">
            返回
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>

        {/* Term Info */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="text-6xl">{term.icon}</div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">{term.name}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="secondary">{term.season}</Badge>
                  <Badge variant="outline">{term.date}</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm text-secondary mb-2">节气简介</h3>
              <p className="text-sm text-muted-foreground">{term.description}</p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">气候特点</h3>
              <p className="text-sm text-foreground">{term.climate}</p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">养生要点</h3>
              <div className="space-y-2">
                {term.health.map((item, index) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-xs font-medium text-primary shrink-0">{index + 1}.</span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">饮食建议</h3>
              <div className="space-y-2">
                {term.diet.map((item, index) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-xs font-medium text-primary shrink-0">{index + 1}.</span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">运动建议</h3>
              <div className="space-y-2">
                {term.exercise.map((item, index) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-xs font-medium text-primary shrink-0">{index + 1}.</span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold text-sm text-secondary mb-2">注意事项</h3>
              <div className="space-y-2">
                {term.avoid.map((item, index) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-xs font-medium text-destructive shrink-0">•</span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SolarTermDetail;
