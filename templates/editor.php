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
  <!-- Modals -->
  <div id="modal-help" class="reveal-modal tiny">
    <h3>Help</h3>
    <p class="light">Here are the possible macros.</p>
    <ul id="help-macros" class="inline-list"></ul>
    <a class="close-reveal-modal">&#215;</a>
  </div>

  <div id="modal-share" class="reveal-modal tiny">
    <h3>Share</h3>
    <p class="light">Share your work.</p>
    <input type="text" id="share-url" />
    <a class="close-reveal-modal">&#215;</a>
  </div>

  <!-- Content -->
  <div id="container" class="row hidden">
    <div class="large-12 columns">
      <!-- Navigation -->      
      <nav class="top-bar">
        <ul class="title-area">
          <!-- Title Area -->
          <li class="name">
            <h1>
              <a class="zeditor-link" href="<?php echo URL ?>">Zeditor</a>
            </h1>
          </li>
          <li class="toggle-topbar menu-icon"><a href="#"><span>menu</span></a></li>
        </ul>
  
        <section class="top-bar-section">
          <!-- Right Nav Section -->
          <ul class="right">
            <li class="divider"></li>
            <li>
              <a href="#" id="btn-save" <?php echo ($id == '') ? 'class="disabled"' : '' ?>><?php echo ($id == '') ? 'Save' : 'Fork' ?></a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#" id="btn-full">Maximize</a>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#" id="btn-help">Help</a>
            </li>
            <?php if ($id != '') { ?>
            <li class="divider"></li>
            <li>
              <a href="#" id="btn-share">Share</a>
            </li>
            <?php } ?>
          </ul>
        </section>
      </nav>     
      <!-- End Top Bar -->
      <form>
        <input type="hidden" value="<?php echo $id; ?>" name="id" id="id"/>
        <textarea <?php echo ($id != '') ? 'disabled': '' ?> id="editor" name="content" placeholder="Write some Z in here"><?php echo $content; ?></textarea>
      </form>
    </div>
    <!-- End Content -->

    <!-- Footer -->

      <footer class="row">
        <div class="large-12 columns">
          <p>
            <span>&copy; Copyright no one at all.</span>
            <!-- <a class="zeditor-link" href="#">Mario</a> -->
          </p>
        </div>
      </footer>

    <!-- End Footer -->
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
