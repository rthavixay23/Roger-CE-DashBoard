/*
 * This is how you can create different pages in Next.js: 
 * create a new route segment using a folder, and add a page file inside it.
*/
import '@/app/learn-flex-box/style.css'

export default function Page() {
    return(
      <body>
        <div className="container">
          <div className="item item-1">Item 1</div>
          <div className="item item-2">Item 2</div>
          <div className="item item-3">Item 3</div>
        </div>
        
      </body>
    
    )

  }