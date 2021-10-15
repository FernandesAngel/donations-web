type DonationFormData = {
  price: string
  method: string
}
export interface ProjectsProps {
  _id: string
  name: string
  description: string
  imageUrl: string
  slug: string
}
export interface Project {
  project: ProjectsProps
}
