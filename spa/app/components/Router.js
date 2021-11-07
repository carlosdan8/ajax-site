import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router() {
	const d = document,
		w = window,
		$main = d.getElementById("main");

	let { hash } = location;

	// console.log(hash);
	$main.innerHTML = null;

	if (!hash || hash === "#/") {
		await ajax({
			url: api.POSTS,
			cbSuccess: (posts) => {
				//console.log(posts);
				let html = "";
				posts.forEach((post) => (html += PostCard(post)));
				// d.querySelector(".loader").style.display = "none";
				$main.innerHTML = html;
			},
		});
	} else if (hash === "#/search") {
		$main.innerHTML = "<h2>Sección del Buscador</h2>";
	} else if (hash === "#/contacto") {
		$main.innerHTML = "<h2>Sección del Contacto</h2>";
	} else {
		$main.innerHTML =
			"<h2>Aquí cargará el contenido del post previamente seleccionado</h2>";
		//console.log(`${api.POST}/${localStorage.getItem("wpPostId")}`);
		await ajax({
			url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
			cbSuccess: (post) => {
				console.log(post);
				$main.innerHTML = Post(post);
				// let html = "";
				// posts.forEach((post) => (html += PostCard(post)));
				// $main.innerHTML = html;
			},
		});
	}
	d.querySelector(".loader").style.display = "none";
}
