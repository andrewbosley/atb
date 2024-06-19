<script>
	import picture from '$lib/images/test.jpg';
  export let profiles = [
    { name: 'Twitter', url: 'https://twitter.com', icon: picture },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: picture },
		];
</script>

{#each profiles as profile}
  <a href={profile.url} class="social-button" target="_blank" rel="noopener noreferrer">
    <img src={profile.icon} alt={profile.name} class="icon" />
    <span class="name">{profile.name}</span>
  </a>
{/each}


<style>
  .social-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding: 10px;
    margin: 5px;
    height: 50px;
    width: 200px;
    background-color: var(--Black);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ddd;

      .icon {
        transform: rotate(360deg) translateX(100%);
      }

      .name {
        transform: translateX(-100%);
      }
    }
  }

  .name, .icon {
    transition: transform 0.3s;
  }

  .name {
    margin-right: auto;
    z-index: 1;
  }

  .icon {
    position: absolute;
    width: 24px;
    height: 24px;
    z-index: 0;
  }
</style>


