import { MainLayout } from "../components/MainLayout";
import { HomePage } from "../components/Home";

export default function Home() {
  return (
    <MainLayout
      og_site = ''
      og_type = ''
      og_url = ''
      og_title = 'Студия звукозаписи Полтава'
      og_desc = ''

      title = "Студия звукозаписи Полтава"
      desc = ""
      keywords = ""
      photo = ""
    >
      <HomePage />
    </MainLayout>
  )
}
