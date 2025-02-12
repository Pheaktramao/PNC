<?php
/**
 * file for dupermag customizer core
 */
require trailingslashit( get_stylesheet_directory() ).'acmethemes/customizer/dupermag-customizer-core.php';
require trailingslashit( get_stylesheet_directory() ).'acmethemes/customizer/upgrade-to-dupermagpro/class-customize.php';

/**
 * file for dupermag dynamic CSS
 */
require trailingslashit( get_stylesheet_directory() ).'acmethemes/hooks/dupermag-dynamic-css.php';

/*themes info*/
if ( is_admin() ) {
    require trailingslashit( get_stylesheet_directory() ).'acmethemes/admin-notice/class-admin-notice-handler.php';
}