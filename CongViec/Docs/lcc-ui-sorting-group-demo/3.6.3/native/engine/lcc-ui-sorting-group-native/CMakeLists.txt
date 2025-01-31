
if(NOT DEFINED COCOS_SOURCE_PLUGIN_EXCULDE)
    set(COCOS_SOURCE_PLUGIN_EXCULDE)
endif()
if(NOT DEFINED COCOS_SOURCE_PLUGIN_LIST)
    set(COCOS_SOURCE_PLUGIN_LIST)
endif()
if(NOT DEFINED COCOS_SOURCE_PLUGIN_INCLUDES)
    set(COCOS_SOURCE_PLUGIN_INCLUDES)
endif()

# 排除替换源文件
list(APPEND COCOS_SOURCE_PLUGIN_EXCULDE 
    "${COCOS_X_PATH}/cocos/2d/renderer/Batcher2d.h" 
    "${COCOS_X_PATH}/cocos/2d/renderer/Batcher2d.cpp" 
    "${COCOS_X_PATH}/cocos/2d/renderer/RenderEntity.h" 
    "${COCOS_X_PATH}/cocos/2d/renderer/RenderEntity.cpp"
    "${COCOS_X_PATH}/cocos/core/scene-graph/Node.h" 
    "${COCOS_X_PATH}/cocos/core/scene-graph/Node.cpp"
)

# 添加替换源文件
list(APPEND COCOS_SOURCE_PLUGIN_LIST 
    "${CMAKE_CURRENT_LIST_DIR}/native/cocos/2d/renderer/Batcher2d.h" 
    "${CMAKE_CURRENT_LIST_DIR}/native/cocos/2d/renderer/Batcher2d.cpp"
    "${CMAKE_CURRENT_LIST_DIR}/native/cocos/2d/renderer/RenderEntity.h" 
    "${CMAKE_CURRENT_LIST_DIR}/native/cocos/2d/renderer/RenderEntity.cpp"
    "${CMAKE_CURRENT_LIST_DIR}/native/cocos/core/scene-graph/Node.h" 
    "${CMAKE_CURRENT_LIST_DIR}/native/cocos/core/scene-graph/Node.cpp"
)

# 添加替换源文件
list(APPEND COCOS_SOURCE_PLUGIN_INCLUDES 
    "${CMAKE_CURRENT_LIST_DIR}/native" 
    "${CMAKE_CURRENT_LIST_DIR}/native/cocos"
)
