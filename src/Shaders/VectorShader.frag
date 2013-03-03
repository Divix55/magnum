#ifndef NEW_GLSL
#define in varying
#define fragmentColor gl_FragColor
#endif

#ifdef EXPLICIT_UNIFORM_LOCATION
layout(location = 1) uniform vec4 color;
#else
uniform lowp vec4 color;
#endif

#ifdef EXPLICIT_TEXTURE_LAYER
layout(binding = 16) uniform sampler2D vectorTexture;
#else
uniform lowp sampler2D vectorTexture;
#endif

in vec2 fragmentTextureCoordinates;

#ifdef NEW_GLSL
out vec4 fragmentColor;
#endif

void main() {
    lowp float intensity = texture(vectorTexture, fragmentTextureCoordinates).r;
    fragmentColor = intensity*color;
}
