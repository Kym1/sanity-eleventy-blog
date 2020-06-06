export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edbc2c81311f8ed67d10e05',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-2pa6uym1',
                  apiId: '69fa78ab-e664-4799-b69c-933d7119b112'
                },
                {
                  buildHookId: '5edbc2c84265ffdee54f0f6f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-tbvd8o4c',
                  apiId: 'e27090a0-ae4d-416a-b78c-952dd1cf5036'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kym1/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-tbvd8o4c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
