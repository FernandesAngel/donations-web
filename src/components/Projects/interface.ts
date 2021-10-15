interface ProjectsProps {
  _id: string
  name: string
  description: string
  imageUrl: string
  slug: string
}
export interface ListProjectsProps {
  projects: ProjectsProps[]
}
