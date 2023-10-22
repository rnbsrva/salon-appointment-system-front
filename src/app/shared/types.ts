export type SidebarElement = {
  name: string,
  list: {
    value: string,
    link: string
  }[]
}

export type Sidebar = SidebarElement[]
