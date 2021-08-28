import Head from "next/head";

import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function MainLayout({
    children,

    og_site = '', 
    og_width = '1200',
    og_height = '630',
    og_type = '',
    og_url = '',
    og_title = 'Студия звукозаписи Полтава',
    og_desc = '',

    title = "Студия звукозаписи Полтава",
    desc = "",
    keywords = "",
    photo = ""
}){
    return(
    <>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={desc} />

            <meta property ="og:type" content={og_type} />
            <meta property ="og:url" content={og_url} />
            <meta property ="og:title" content={og_title} />
            <meta property="og:image"content={photo} />
            <meta property ="og:image:secure_url" content={photo} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content={og_width} />
            <meta property="og:image:height" content={og_height} />
            <meta name="twitter:image" content={photo} />

            <meta property ="og:site_name" content={og_site} />
            <meta property ="og:description" content={og_desc} />
            <meta name="twitter:card" content='summary_large_image' />

            <title>{title} | Kapustin Records</title>

        </Head>
        <Navbar />
        
        <main>
            {children}
        </main>
        
        <Footer />
    </>  
    
    )
}