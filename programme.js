//verifier que le document HTML(DOM) est complètement chargé
$(document).ready(function(){
	//tools
	var vraiFaux = true;
	var posTools = $("#tools").css("left");
	
	$("#tools img").click(function(){
		if (vraiFaux == true) {
			$("#tools").animate(
				{left:0},
				200,
				function(){vraiFaux=false;});
		};

		if (vraiFaux == false) {
			$("#tools").animate(
				{left:posTools},
				800,
				function(){vraiFaux=true;}
				);
		};
	}); // fin du clique sur tools
	
	//changer la couleur du body
	$("#tools div").click(function(){
	//recupérer la couleur de l'élément cliqué (this)'
		var couleur = $(this).css("background-color");
	//attribuer la couleur récupérée à body
		$("body").css("background-color",couleur);
	});
	
	$("#tools div, #tools img,#vignettes img,#accordion h3").mouseover(function(){
		//change le pointeur flêche en doigt
		$(this).css("cursor","pointer");
	});
	
	
	
	
	//permutation d'images
	//liste de titres
	var titre= ["L'automne","L'hiver","Le printemps","L'été"];
	
	$("#vignettes img").click(function(){
		//récuperer la source de l'image cliquée.
		var sourceImage = $(this).attr("src");
			
		//attribuer la soure récupéré
		$("#film img").attr("src",sourceImage);
		$("#film img").css({"width":960, "height":400});
		
		//recupérer l'index des images dans vignettes	
		var ind =$(this).index();
		//var nbre = $("vignettes img").length;
		
		$("#header h1").text(titre[ind]);
		
	});
	
	//*****accordéon*****\\
	$("#accordion p").hide();
	//$("#accordion p:nth-child(2)").show();
	
	$("#accordion h3").click(function(){
		$(this).next().not(":animated").slideToggle();
	});
	
	//*****Tablette*****\\
	$("ul.tab-list li a").click(function(e){
		//pour éviter un mauvais comportement des lien
		e.preventDefault();
		var lien = $(this).attr("href");
		$("div.tabs div.tab-panel").hide();
		$(lien).show();
		
		$("ul.tab-list li").removeClass("active");
		$(this).parent().addClass("active");
	});
	
	//fixer le menu principal
	$(window).scroll(function(){
		//relever la valeur du défilement
		var dy =$(document).scrollTop();
		
		//fixer le menu selon dy
		if (dy >= 450){
			$("#menu").css({
				"position":"fixed",
				"top":0,
				"width":960,
				"background-color":"rgba(0,0,0,1)"
			});
			$("#sous-menu").stop().animate({"top":dy + 150});
				
		} else{//remettre à l'etat initial
			$("#menu").css({
				"position":"static",
				"background-color": "rgba(0,0,0,.2)"
			});
			$("#sous-menu").stop().animate({"top":600});
		};
		//Récuperer le hauter du document et le diviser par 3
		var hauteurDoc = $(document).height();
		var div3hauteur = (hauteurDoc)/3;
		//Récuperer le scrollTop
		var scrl= $(document).scrollTop();
		if (scrl < 450) {
		$("#remonte").css({"display":"none",});
		}else{
			$("#remonte").css({"display":"block",});
		};
		
	
	
	});//fin scroll
	
	$("#sous-menu a[href^='#'],#remonte a").click(function(){
		//Récuperer l'attribut du lien href cliqué
		var id = $(this).attr("href");
		
		//Récupérer la position relative de l'id
		var posY= $(id).offset().top;
		
		$("html,body").stop().animate({scrollTop:posY - 60});
	
	});
	
	/**************************** Slider***************************************/
	//retourne la position courante de #defilant
	var nbre= $("#defilant img").length;
	var init = 1;
	var info;
	
	//declaration de la variable booléen sur true
	var vraiFaux= true;
	
	//*******Bouton next********
	$("#next").click(function(){
		//Verifier si vraiFaux est sur true
		if (vraiFaux==true) {
			
			if (init < nbre ) {
				vraiFaux =false;
				//relever la position courante de #defilant
				var posCourante=$("#defilant").position().left;
				
				//animer #defilant
				$("#defilant").stop().animate({left:posCourante - 800},
					function(){
						vraiFaux=true;
					});
				
				//incrementer init de 1
				init++;
				
				//changer le text de l'info
				info= init + "/" + nbre;
				$("#info").text(info);
			
			};//fin d'IF init < nbre
		
		};//fin d'IF vraiFaux=true	
	
	});//Fin du bouton next
	
	
	//*******Bouton prev*******
	$("#prev").click(function(){
		//Verifier si vraiFaux est sur true
		if (vraiFaux==true) {

			if (init > 1) {
				vraiFaux = false;
				//relever  la position courante de #defilant
				var posCourante=$("#defilant").position().left;
				
				//animer #defilant
				$("#defilant").stop().animate({left:posCourante + 800},
					function(){
						vraiFaux = true;
					});
				
				//decrémenter init de 1
				init--;
				
				//changer le texte de l'info
				info= init + "/" + nbre;
				$("#info").text(info);
			
			};//Fin  d'IF init > 1	
			
		};//Fin  d'IF vraiFaux==true
		
	});//Fin du bouton prev
	
});// fin du programme.







