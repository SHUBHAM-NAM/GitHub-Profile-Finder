let input=document.getElementById('input');
let button=document.getElementById('btn');
let main=document.getElementById('main');
button.addEventListener('click',()=>{
fetch(`https://api.github.com/users/${input.value}`)
.then(res=>res.json())
.then(data=>{
main.innerHTML=`
 <div class="bg-gray-800 rounded-2xl shadow-lg p-6 flex items-center gap-6">
      <img src="${data.avatar_url}" alt="User Avatar"
        class="w-24 h-24 rounded-full border-4 border-indigo-600">
      <div>
        <h2 class="text-2xl font-bold">${data.name}</h2>
        <p class="text-gray-400">${data.login}</p>
        <p class="mt-2">🚀 Bio: ${data.bio}</p>
        <div class="mt-4 flex gap-6">
          <span class="text-sm">📂 Repos: <strong>${data.public_repos}</strong></span>
          <span class="text-sm">👥 Followers: <strong>${data.followers}</strong></span>
          <span class="text-sm">⭐ Following: <strong>${data.following}</strong></span>
        </div>
      </div>
    </div>
    
`
console.log(data);
})
})