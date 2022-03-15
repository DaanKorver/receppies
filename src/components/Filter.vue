<template>
  <div>
    <ul>
      <li>Vlees</li>
      <li>Vis</li>
      <li>Vega</li>
      <li>Rijst</li>
      <li>Ontbijt</li>
    </ul>
    <div class="fade"></div>
    <button>&times;</button>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  gap: 1em;
  list-style-type: none;
  overflow: scroll;
  padding-right: 3.5rem;
}

ul::-webkit-scrollbar {
    display: none;
}

li {
  padding: .5em 1em;
  border: 2px solid var(--primary);
  border-radius: .5em;
  color: var(--primary);
}

div {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

button {
  position: absolute;
  right: 0;
  border-radius: 50%;
  border: none;
  outline: none;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  background: var(--primary);
  color: var(--white);
  z-index: 2;
}

.fade {
  height: 100%;
  width: 4.5rem;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(to right, transparent, var(--dark) 40%);
  z-index: 1;
}

</style>