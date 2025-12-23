import {
  Building2,
  TrendingUp,
  FileCheck,
  Target,
  FileText,
  UserCheck,
  MapPin,
  Home,
  Key,
  BarChart3,
  DollarSign,
  ClipboardCheck,
  Shield,
  MessageSquare,
  Search,
  CreditCard,
  Headphones,
  CheckCircle2,
  Users,
  Award,
} from "lucide-react"

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  TrendingUp,
  FileCheck,
  Target,
  FileText,
  UserCheck,
  MapPin,
  Home,
  Key,
  BarChart3,
  DollarSign,
  ClipboardCheck,
  Shield,
  MessageSquare,
  Search,
  CreditCard,
  Headphones,
  CheckCircle2,
  Users,
  Award,
}

export function getIcon(iconName: string) {
  return iconMap[iconName] || Building2
}

