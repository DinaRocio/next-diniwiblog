import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData(){
  //obtener el nombre de las carpetas debajo de /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Eliminar ".md" del nombre de las carpetas para obtener el id
    const id = fileName.replace(/\,md$/, '')

    // Leer el markdown de la carpeta como un string
    const fullPath= path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Usar gray-matter para parsear la seccion del metadata del post
    const matterResult = matter(fileContents) 

    // Combinar la data con el ID

    return {
      id, 
      ... matterResult.data
    }
  })

  //Ordernar los post por date

  return allPostsData.sort((a, b) => {
    if (a.date < b.date){
      return 1 
    } else {
      return -1
    }
  })
}