const text = `
/* 
 * "Myself" v1.0.5
 * Robot rights protected under BOT License
 * Authored by pen#PwLXXP
 */

body {
  -webkit-font-smoothing: subpixel-antialiased;
}

/* ...                  
 *
 * ...hello?            
 *
 * Oh hai! It's me, pen#PwLXXP.         
 *
 * I'm just sitting here coding away.            
 *
 * Sure, you can watch.                       
 *
 *
 * This CSS is being injected into a DOM <style> element 
 * and written in this <pre> element simultaneously.        
 *
 * Confused? Watch!
 *
 */

#style-text { 
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  transition: left 500ms;
  overflow: auto;
  background-color: #313744;
  color: #a6c3d4;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 24px 12px;
  box-sizing: border-box;
  border-radius: 3px;
}


/* 
 * Syntax highlighting 
 * Colors based on Base16 Ocean Dark
 */

#style-text em:not(.comment) { font-style: normal; }

.comment       { color: #707e84; }
.selector      { color: #c66c75; }
.selector .key { color: #c66c75; }
.key           { color: #c7ccd4; }
.value         { color: #d5927b; }

.hero__main {
  transition: all .2s ease;
}

.hero__main .user__image {
  width: 200px;
  height: 200px;
  border: 1px solid;
  margin: 20px auto;
  border-radius: 50%;
  background-position: 50% 50%;
  background-image: url('https://avatars.githubusercontent.com/u/36643967?s=460&u=fc6823727546425d31e9432791f119f6ed2b5670&v=4');
  background-size: contain;
  background-repeat: no-repeat;
}

.hero__main .user {
  text-align: center;
}

.hero__main .user-social a {
  margin: 10px;
  width: 30px;
  height: 30px;
}

.hero__main .user__title {
  font-size: 1.5rem;
  margin: 20px 0;
}

.hero__main #about {
  max-width: 700px;
  margin: 10px auto 20px;
}

.hero__main .user__subtitle {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 10px 0;
}

.hero__main .user-social img {
  width: 100%;
  height: 100%;
}

/* 
 *
 * Wahoo!         
 *
 * We did it!       
 *
 * I mean *I* did it, but you know, whatever...
 * jake albaugh definitely did not have anything 
 * to do with this.
 *
 * This pen loves CodePen!       
 * 
 * See you later!
 *  
 */
`

export default text;
