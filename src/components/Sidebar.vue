<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo_icons">
			<div class="logo">
				<img :src="logoURL" alt="Vue" />
				<h1 class="logo_text">KIMYO INTERNATIONAL <br> UNIVERSITY IN TASHKENT</h1>
			</div>
		</div>

		<div class="menu-toggle-wrap">
			
		</div>

		<h3 class="admin_title">Admin</h3>
		<div class="menu">
			<router-link to="/Orderedbooks" class="button">
				<span class="material-icons">book</span>
				<span class="text">Orderedbooks</span>
			</router-link>
			<router-link to="/Uploadbooks" class="button">
				<span class="material-icons">upload</span>
				<span class="text">Upload books</span>
			</router-link>
			<router-link to="/Managethestudents" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Manage the students</span>
			</router-link>
			<router-link to="/Books" class="button">
				<span class="material-icons">book</span>
				<span class="text">Books</span>
			</router-link>
		</div>

		<div class="flex"></div>

		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
			<router-link to="/logout" class="button">
				<span class="material-icons">logout</span>
				<span class="text">Logout</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/images/kiut_logo.png'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {

	
	display: flex;
	flex-direction: column;

	background-color: var(--dark);
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;
		display: flex;

		img {
			width: 2rem;
		}
	}

	.logo_text {
		font-size: 15px;
		margin-left: 10px;
		
	}



	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}

			&:hover {
				.material-icons {
					color: var(--dark);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3,
	.button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: --primary;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--dark-alt);

				.material-icons,
				.text {
					color: var(--dark);
				}
			}

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--dark);

				.material-icons,
				.text {
					color: var(--dark);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;

			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3,
		.button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>