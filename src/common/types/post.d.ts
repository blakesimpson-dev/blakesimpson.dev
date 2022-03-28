import { ImageData, LinkData } from "."

export type PostData = {
  title: string
  content: string
  images: Array<ImageData>
  links: Array<LinkData>
}