import { NavLink } from '@/components/NavLink';
import { Home, Book, Heart, User } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-1">
          <NavLink
            to="/"
            className="flex flex-col items-center py-3 text-muted-foreground hover:text-primary transition-colors"
            activeClassName="text-primary font-medium"
          >
            <Home className="h-5 w-5 mb-1" />
            <span className="text-xs">首页</span>
          </NavLink>
          
          <NavLink
            to="/food-library"
            className="flex flex-col items-center py-3 text-muted-foreground hover:text-primary transition-colors"
            activeClassName="text-primary font-medium"
          >
            <Book className="h-5 w-5 mb-1" />
            <span className="text-xs">食材库</span>
          </NavLink>
          
          <NavLink
            to="/personalized"
            className="flex flex-col items-center py-3 text-muted-foreground hover:text-primary transition-colors"
            activeClassName="text-primary font-medium"
          >
            <User className="h-5 w-5 mb-1" />
            <span className="text-xs">个性推荐</span>
          </NavLink>
          
          <NavLink
            to="/favorites"
            className="flex flex-col items-center py-3 text-muted-foreground hover:text-primary transition-colors"
            activeClassName="text-primary font-medium"
          >
            <Heart className="h-5 w-5 mb-1" />
            <span className="text-xs">收藏</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
