<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/home" data-name="Home"><img src="@/assets/home.svg" alt="Home"></RouterLink>
      </li>
      <li>
        <RouterLink to="/search" data-name="Search"><img src="@/assets/search-green.svg" alt="Search"></RouterLink>
      </li>
      <li>
        <RouterLink to="/add" data-name="Add"><img src="@/assets/plus.svg" alt="Add"></RouterLink>
      </li>
      <li>
        <RouterLink to="/info" data-name="Info"><img src="@/assets/info.svg" alt="Info"></RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--dark);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: .7em 0;
  padding-bottom: 2.4em;
  border-top: 2px solid var(--gray);
}

ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  width: 90%;
  margin: 0 auto;
}

li > a {
  position: relative;
}

li > a.router-link-active {
  filter: brightness(0) invert(1)
}

li > a::after {
  content: attr(data-name);
  color: var(--primary);
  position: absolute;
  font-size: .7em;
  bottom: -1em;
  left: 50%;
  transform: translateX(-50%);
}

img {
  width: 2.3em;
}
</style>