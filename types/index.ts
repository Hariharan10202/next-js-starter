// types/index.ts
import {
  User,
  Roadmap,
  Module,
  Skill,
  ResourceType,
  ProgressStatus,
  UserRole,
  UserLevel,
  RoadmapLevel,
} from "@prisma/client";

// NextAuth extended types
import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: UserRole;
  }

  interface Session {
    user: {
      id: string;
      role: string;
      name?: string;
      email?: string;
      image?: string;
    };
  }
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

// User related types
export interface UserProfile extends Omit<User, "password"> {
  skills?: UserSkillWithDetails[];
  badges?: UserBadgeWithDetails[];
}

export interface UserSkillWithDetails {
  id: string;
  interest: number;
  skill: Skill;
}

export interface UserBadgeWithDetails {
  id: string;
  awardedAt: Date;
  badge: {
    id: string;
    name: string;
    description: string;
    image: string;
    xpValue: number;
  };
}

// Roadmap related types
export interface RoadmapWithDetails extends Roadmap {
  skill: Skill;
  creator: {
    id: string;
    name: string;
    image: string;
  };
  modules?: ModuleWithProgress[];
  _count?: {
    users: number;
    discussions: number;
  };
}

export interface ModuleWithProgress extends Module {
  resources?: ResourceWithDetails[];
  topics?: TopicWithResources[];
  progress?: {
    status: ProgressStatus;
    startedAt: Date | null;
    completedAt: Date | null;
  };
}

export interface TopicWithResources {
  id: string;
  title: string;
  description: string;
  orderIndex: number;
  resources: ResourceWithDetails[];
}

export interface ResourceWithDetails {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  url: string;
  duration: number | null;
}

// Form submission types
export interface OnboardingData {
  interests: string[];
  goals: string;
  weeklyHours: number;
  level: UserLevel;
}

export interface RoadmapCreationData {
  title: string;
  description: string;
  skillId: string;
  duration: number;
  difficulty: RoadmapLevel;
  modules: {
    title: string;
    description: string;
    weekNumber: number;
    orderInWeek: number;
    estimatedHours: number;
    xpPoints: number;
    topics: {
      title: string;
      description: string;
      orderIndex: number;
    }[];
  }[];
}

export interface ResourceSubmissionData {
  title: string;
  description: string;
  type: ResourceType;
  url: string;
  duration?: number;
  moduleId?: string;
  topicId?: string;
}

// Discussion types
export interface DiscussionWithDetails {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  user: {
    id: string;
    name: string;
    image: string;
  };
  _count: {
    comments: number;
  };
}

export interface CommentWithDetails {
  id: string;
  content: string;
  createdAt: Date;
  user: {
    id: string;
    name: string;
    image: string;
  };
  replies?: CommentWithDetails[];
}
