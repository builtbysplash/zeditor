<!DOCTYPE html>
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8" />

  <!-- Set the viewport width to device width for mobile -->
  <meta name="viewport" content="width=device-width" />

  <title>Zeditor</title>

  <link rel="stylesheet" href="<?php echo URL ?>/css/normalize.css">
  <link rel="stylesheet" href="<?php echo URL ?>/css/foundation.css">
  <link rel="stylesheet" href="<?php echo URL ?>/css/zeditor.css">

  <script src="<?php echo URL ?>/js/vendor/custom.modernizr.js"></script>

</head>
<body>

  <!-- Content -->
  <div class="row">
    <div class="large-12 columns">
      <!-- Navigation -->      
      <nav class="top-bar">
        <ul class="title-area">
          <!-- Title Area -->
          <li class="name">
            <h1>
              <a href="#">Zeditor</a>
            </h1>
          </li>
          <li class="toggle-topbar menu-icon"><a href="#"><span>menu</span></a></li>
        </ul>
  
        <section class="top-bar-section">
          <!-- Right Nav Section -->
          <ul class="right">
            <li class="divider"></li>
            <li>
              <a href="#" id="btn-save">Save</a>
            </li>
            <li>
              <a href="#" id="btn-full">Maximize</a>
            </li>
          </ul>
        </section>
      </nav>     
      <!-- End Top Bar -->
      <form>
        <input type="hidden" value="<?php echo $id; ?>" name="code" id="code"/>
        <textarea id="editor" placeholder="Write some Z in here"><?php echo $text; ?></textarea>
      </form>
    </div>
  </div>

    <!-- End Content -->

    <!-- Footer -->

      <footer class="row">
        <div class="large-12 columns">
          <p>
            <span>&copy; Copyright no one at all.</span>
            <a href="#">Built by Splash</a>
          </p>
        </div>
      </footer>

    <!-- End Footer -->

    </div>
  </div>

  <script>
  document.write('<script src=<?php echo URL ?>/js/vendor/' +
  ('__proto__' in {} ? 'zepto' : 'jquery') +
  '.js><\/script>')
  </script>
  <script src="<?php echo URL ?>/js/foundation.min.js"></script>
  <script src="<?php echo URL ?>/js/zeditor.js"></script>

</body>
</html>
