precision highp float;

#include <alpha-test>
#include <texture>

in vec4 v_color;

#if USE_TEXTURE
in vec2 v_uv0;
uniform sampler2D texture;
#endif

void main() {
    vec4 o = vec4(1.0);

    #if USE_TEXTURE
    o = texture2D(texture, v_uv0);
    #endif

    o *= v_color;

    ALPHA_TEST(o);

    gl_FragColor = o;
}
