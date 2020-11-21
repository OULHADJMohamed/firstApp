class Article{
    constructor (ref,nom,prixVente,quantiteStock){
        this.ref=ref;
        this.nom=nom;
        this.prixVente=prixVente;
        this.quantiteStock=quantiteStock;
    }
    article(r,n,p,q){
        this.ref=r;
        this.nom=n;
        this.prixVente=p;
        this.quantiteStock=q;
    } 
}  
class Program extends Article{
    constructor(ref,nom,prixVente,quantiteStock){
    super(ref,nom,prixVente,quantiteStock)


}}

var refer=[];
var nnom=[];
var pprix=[];
var quanti=[];

function getArticles(a,b,c,d){
    this.a=localStorage.getItem("Reference").split(",");
    this.b=localStorage.getItem("Nom").split(",");
    this.c=localStorage.getItem("Prix").split(",");
    this.d=localStorage.getItem("Quantite").split(",");
    return a,b,c,d;
}

const Ajouter=(ev)=>{
    ev.preventDefault();
   
    refer.push(document.getElementById('ref').value);
    nnom.push(document.getElementById('nom').value);       
    pprix.push(document.getElementById('prix').value);
    quanti.push(document.getElementById('q').value);

    localStorage.setItem('Reference',refer) 
    localStorage.setItem('Nom',nnom) 
    localStorage.setItem('Prix',pprix) 
    localStorage.setItem('Quantite',quanti) ;    
        

    document.forms[0].reset();
   
}
//lieer 
document.addEventListener('DOMContentLoaded',()=>{
document.getElementById('ajout').addEventListener('click',Ajouter);});



function supprimer () {
    var eltSup=prompt("Donner la reference de l'element que vous voulez supprimmer: ");
    getArticles(r,n,p,q);
   /*
    var r=localStorage.getItem("Reference").split(',');
    var n=localStorage.getItem("Nom").split(",");
    var p=localStorage.getItem("Prix").split(",");
    var q=localStorage.getItem("Quantite").split(",");
   */
    for(var i=0;i<r.length;i++){    
        if(r[i]==eltSup){
            r.splice(i,1);
            localStorage.setItem('Reference',r);
            n.splice(i,1);
            localStorage.setItem('Nom',n);
            p.splice(i,1);
            localStorage.setItem('Prix',p);
            q.splice(i,1);
            localStorage.setItem('Quantite',q);
            alert("l'article supprimé");  
        }else{
            alert("Cet article n'existe pas dans la liste");
        }
    }
}
function modifierArticle(){
    var modif=prompt("Donner la reference de l'article que vous voulez modifier:");
   
    var a=localStorage.getItem("Reference").split(",");
    var b=localStorage.getItem("Nom").split(",");
    var c=localStorage.getItem("Prix").split(",");
    var d=localStorage.getItem("Quantite").split(",");
    
    for(var i=0;i<a.length;i++){    
        if(a[i]==modif){
            a[i]=prompt("donner la reference");
            localStorage.setItem('Reference',a[i]);
            b[i]=prompt("Donner le nom");
            localStorage.setItem('Nom',b[i]);
            c[i]=prompt("Donner le prix de vente");
            localStorage.setItem('Prix',c[i]);
            d[i]=prompt("Donner la quantité dans le stock");
            localStorage.setItem('Quantite',d[i]);
        }else{
            alert("Cet article n'existe pas dans la liste");
        }
}
}

function rechercheArticle(){
    var rech=prompt("Donner le nom de l'article que vous cherchez:");

    var a1=localStorage.getItem("Reference").split(",");
    var b1=localStorage.getItem("Nom").split(",");
    var c1=localStorage.getItem("Prix").split(",");
    var d1=localStorage.getItem("Quantite").split(",");
   
    for(var i=0;i<b1.length;i++){    
        if(b1[i]==rech){
            referen=a1[i];
            name=b1[i];
            prixx=c1[i];
            quan=d1[i];
        
        alert("les caracteristiques de l'artcle sont: \n Reference: "+referen+"\n Nom: "+name+"\n Prix: "+prixx+"\n La quantité dans le stock: "+quan+""); 
        }else("C eproduit n'existe pas!")
    
    }
}

            