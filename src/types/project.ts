export interface IStack {
    name: string
    icon: string
    bg: string
    color: string
}
export interface IProject {
    name: string
    hostedUrl: string
    githubUrl: string
    imagePreview: string
    description: string
    techStack: IStack[]
}
