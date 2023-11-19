<template>
	<main id="Admin-page">
		<div class="container mt-100">
			<div class="border border-dark rounded mt-100">

				<div>
					<input type="file" accept="image/jpeg" @change=uploadImage id="uploadImage">
					<img :src="previewImage" class="uploading-image" />
				</div>
				<div class="inputs">
					<div class="form-group">
						<label for="exampleFormControlInput1"></label>
						<input type="text" v-model="uploadData.title" class="form-control" placeholder="Title">
					</div>
					<form>
						<div class="row">
							<div class="col">
								<input type="text" v-model="uploadData.publicationyear" class="form-control"
									placeholder="Publication Year">
							</div>
<!--							<div class="col">-->
<!--								<input type="date" v-model="uploadData.date" class="form-control" placeholder="MM.DD.YYYY">-->
<!--							</div>-->
						</div>
					</form>
					<select v-model="uploadData.langauge" class="form-select">	
						<option disabled>Langauge</option>
						<option>Uzbek</option>
						<option>Russian</option>
						<option>English</option>
					</select>
					<select v-model="uploadData.category" class="form-select">
						<option disabled>Category</option>
						<option>Horror</option>
					</select>
					<div id="counters">
						<h1> {{ count }}</h1>
						<span @click="count += 1;" class="material-icons">expand_less</span>
						<span @click="count = count == 0 ? 0 : count - 1" class="material-icons">expand_more</span>
					</div>
					<div class="button_div col align-self-end pt-5">
						<button type="button" class="btn btn-primary" @click=upload>Upload</button>
						<button type="button" class="btn btn-warning" @click=clear>Clear</button>
					</div>

				</div>
			</div>
		</div>


	</main>
</template>

<script>


import axios from "axios";

export default {
	name: 'imageUpload',
	data() {
		return {
			previewImage: null,
			count: 0,
			uploadData: {
				title: '',
				publicationyear: '',
				date: '',
				langauge: 'Langauge',
				category: 'Category',
			},
		}
	},
	methods: {
		uploadImage(e) {
			// console.log("123");
			const image = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(image);
			reader.onload = e => {
				this.previewImage = e.target.result;
				console.log(this.previewImage);
			};
		},

		clear(e) {
			this.uploadData = {
				title: '',
				publicationyear: '',
				langauge: 'Langauge',
				category: 'Category'
			};
			this.count = 0;
			this.previewImage = null;
		},


		upload(e) {

			const fileInput = document.querySelector('#uploadImage');
			this.uploadData['counter'] = this.count;
			this.uploadData['file'] = fileInput.files[0];
			// console.log(this.uploadData)
			
      
      /*
      const options = {
        url: 'http://127.0.0.1:5208/api/Book',
        method: 'POST',
        body: this.uploadData,
        // If you add this, upload won't work
        headers: {
          // 'Accept': 'application/json',
          'Content-type': 'application/json',
          // 'Content-Type': 'multipart/form-data',
          // accept: 'application/json',
        },
      };
      axios(options)
          .then(response =>{
            console.log(response.status);
          })
          .catch(error => {console.log( 'the error has occured: ' + error) })
      ;
      */

      axios({
        method: 'post',
        url: 'http://localhost:5208/api/Book',
        data: JSON.stringify(this.uploadData),
        config: { headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'multipart/form-data'
          }}
      })
          .then((response) => {console.log(response)})
          .catch(error => {console.log( 'the error has occured: ' + error) });

			console.log(this.uploadData)
			// fetch('your-upload-url', options);

		}
	}

}  // missing closure added





</script>



<style  lang="scss" scoped>
.border {
	display: flex;
}

img {
	width: 480px;
	height: 500px;
}
</style>