import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts:Post[] = [
    {title: 'I want to learn Angular components',
    text: 'mcwimciwdmcidmcidmcidmidmcimdicmiemimeimdiedmeimdei mimdi mimi ',
      id: 1
    },
    {title: 'I want to learn Angular components 2',
      text: 'mcwimciwdmcidmcidmcidmidmcimdicmiemimeimdiedmeimdei mimdi mimi 2',
      id: 2
    }
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0] = {
        title: 'Change',
        text: 'TextChange',
        id: 333
      }
    }, 5000)
  }

  updatePosts(post: Post){
    this.posts.unshift(post)
    // console.log('Post: ', post)
  }

  removePost(id: number){
    console.log('Id to remove: ', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
