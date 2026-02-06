console.log('hello world')

const btn = document.getElementById('btn')
const heading = document.getElementById('heading')


btn.addEventListener('click', function() {
    console.log('Button clicked!')
    // btn.style.backgroundColor = 'cyan'
    btn.style.color = 'red'
    btn.textContent = 'Clicked'
    heading.style.color = 'red'

    const img = document.createElement('img')
    img.src = 'tps://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    img.alt = 'A beautiful image'
    document.body.appendChild(img)
    const h2 = document.createElement('h2')
    h2.textContent = 'This is a dynamically added heading'
    document.body.appendChild(h2)
})


