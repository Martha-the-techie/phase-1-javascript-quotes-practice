const quotesList = document.querySelector('#quotes-list')

fetch('http://localhost:3000/quotes?_embed=likes')
  .then(response => response.json())
  .then(data => {

    data.forEach(quote => {
      const li = document.createElement('li')
      li.className = 'quote-card'

      const blockquote = document.createElement('blockquote')
      blockquote.className = 'blockquote'

      const p = document.createElement('p')
      p.className = 'mb-0'
      p.textContent = quote.quoteText

      const footer = document.createElement('footer')
      footer.className = 'blockquote-footer'
      footer.textContent = quote.quoteAuthor

      const likeBtn = document.createElement('button')
      likeBtn.className = 'btn-success'
      likeBtn.textContent = `Likes: ${quote.likes.length}`

      const deleteBtn = document.createElement('button')
      deleteBtn.className = 'btn-danger'
      deleteBtn.textContent = 'Delete'

      blockquote.appendChild(p)
      blockquote.appendChild(footer)
      blockquote.appendChild(document.createElement('br'))
      blockquote.appendChild(likeBtn)
      blockquote.appendChild(deleteBtn)

      li.appendChild(blockquote)

      quotesList.appendChild(li)
    })
  })
  .catch(error => console.error(error))


