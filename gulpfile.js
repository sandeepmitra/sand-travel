var gulp = require ('gulp')
watch = require ('gulp-watch');

gulp.task ('default' , function(){
	console.log ("Yeaahhh -- Default Gulp Task Added");
});

gulp.task ('html' , function(){
	console.log("I think this is quite useful in my HTML");
});

gulp.task ('style' , function(){
	console.log("There is a change in the Style files");
});

gulp.task ('watch' , function(){
	watch('./app/index.html' , function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css' , function(){
		gulp.start('style');
	});
});