import{_ as a,o as p,c as t,e}from"./app-93907a86.js";const n={},s=e('<h1 id="_6-模型评估与导出" tabindex="-1"><a class="header-anchor" href="#_6-模型评估与导出" aria-hidden="true">#</a> 6.模型评估与导出</h1><h2 id="_6-1-评估选项卡概览" tabindex="-1"><a class="header-anchor" href="#_6-1-评估选项卡概览" aria-hidden="true">#</a> 6.1 评估选项卡概览</h2><p>AI Matrix评估选型卡共分为测试参数配置栏、芯片部署配置栏、推理结果显示画布、测试数据列表、评估指标输出栏、指标说明栏六部分组成。如图6-1所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175156725.png" alt="image-20240522175156725"></p><p>图6-1 AI Matrix评估选项卡</p><p>在评估选项卡中用户可以在①号区域（测试参数配置栏）选择模型进行评估，如果在未选择模型的前提下点击评估测试按钮，则会弹出“请选择模型”提示，如图6-2所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175206382.png" alt="image-20240522175206382"></p><p>图6-2 模型选择提示</p><p>AI Matrix支持三种图像评估来源，分别是测试集测试、额外数据集测试和图像目录测试。</p><p>1、测试集测试：拆分选项卡中拆分的测试数据集。</p><p>2、额外测试集：非本项目使用数据集，但类别名称、类别数量、数据集格式与本工程所使用的数据集相同。切换测试方法到额外数据集测试后，需要配置额外数据集路径，如图6-3所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175219192.png" alt="image-20240522175219192"></p><p>图6-3 额外测试集测试</p><p>3、图像目录测试：选择<strong>只含有图像的目录</strong>进行测试。在该测试模式下推理，只会显示图像推理结果，不会输出测试指标。如图6-4所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175232861.png" alt="image-20240522175232861"></p><p>图6-4 图像目录测试</p><p>测试结束后，用户可以单击生成报告按钮，将测试的输出结果按照pdf与xls保存在工程目录下的out文件夹下。pdf中保存项有任务类型、测试模型、测试模型、测试模型路径、测试数据路径、标签映射、指标表单及混淆矩阵路径；xls中保存着本次评估输出的混淆矩阵结果，如图6-5所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175307762.png" alt="image-20240522175307762"></p><p>图6-5 评估报告内容</p><h2 id="_6-2-模型评估显示" tabindex="-1"><a class="header-anchor" href="#_6-2-模型评估显示" aria-hidden="true">#</a> 6.2 模型评估显示</h2><p>单击开始测试后，AI Matrix进入到测试状态，模型的推理结果会实时的刷新在推理结果显示画布上，同时被推理的图片路径会实时追加至测试数据列表中。如图6-6所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175323134.png" alt="image-20240522175323134"></p><p>图6-6 推理结果显示</p><p>推理结束后，用户可以单击测试列表中的选项对测试结果进行回溯查看。</p><p>如果用户是在测试集测试或额外测试测试模式下进行模型评估，评估结束后还会评估指标输出栏中输出评估指标。如图6-7所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175333323.png" alt="image-20240522175333323"></p><p>图6-7 评估指标</p><p>在评估指标输出栏中单击混淆矩阵菜单按钮会显示本次模型在数据集上的评估混淆矩阵，如图6-8所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175342522.png" alt="image-20240522175342522"></p><p>图6-8 评估混淆矩阵</p><h2 id="_6-3-模型部署导出" tabindex="-1"><a class="header-anchor" href="#_6-3-模型部署导出" aria-hidden="true">#</a> 6.3 模型部署导出</h2><p>测试完成后如果用户对模型的检测质量满意，可以在②号区域选择相应的芯片类型、推理宽度、推理高度、置信度阈值等进行导出。</p><p>目前AI Matrix适配K210和K510两款芯片。AI Matrix支持训练和部署时不同的宽高设置，例如在训练时用户使用的图像宽高为512x512，推理时可以选用416x416。对于不同的任务，导出模型部分会有不同的参数选择，对于图像分类任务和语义分割任务会有芯片类型、推理宽度、推理高度、置信度阈值四个选项。目标检测任务会在这四个选项的基础上增加nms阈值，该值会影响检测器输出框之间的重叠程度。如图6-9所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175352122.png" alt="image-20240522175352122"></p><p>图6-9 模型部署栏</p><p>模型部署参数设置完毕后，单击部署按钮，AI Matrix会进入到模型适配状态，同时在AI Matrix界面中弹出等待窗口。如图6-10所示。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240522175403585.png" alt="image-20240522175403585"></p><p>图6-10 AI Matrix模型部署状态</p><p>模型部署结束后会在本地工程目录中生成部署资源包deploy_source.zip压缩包。</p>',39),i=[s];function o(c,r){return p(),t("div",null,i)}const d=a(n,[["render",o],["__file","07-ModelEvaluationExport.html.vue"]]);export{d as default};