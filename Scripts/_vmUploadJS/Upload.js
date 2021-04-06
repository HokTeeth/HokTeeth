    var gui;

    var loader = new THREE.STLLoader();

    //建立場景
    var scene = new THREE.Scene();

    //牙齒旋轉
    var ToothXturn = 0;

    // 宣告元件
    var mesh, mesh2, lineForTeeth, plane, mesh3;

    //面
    var geometry3, geometry4, geometry5, geometry6, geometry7, geometry8;
    var material3, material4, material5, material6, material7, material8;

    //線
    var LineToothYUP = 0, LineToothYDOWN = 0;

    // 宣告牙齒x y z
    var toothX = 0, toothY = 0, toothZ = 0;
    //--------------------------------------------------------------------------------
    //檔案上傳後
    function stlchange(stl) {
        //先判斷下拉有無被選擇
        var SelectOneVal = $("#SelectOne").val();
        var SelectTwoVal = $("#SelectTwo").val();
        if (SelectOneVal == "請選擇機台" || SelectTwoVal == "請選擇材料塊") {
        alert("機台或材料塊未選擇！");
            $("#stlfile").val("");
            return false;
        }
        var reader = new FileReader();
        var file = stl.files[0];
        reader.onloadend = function (e) {
            var geometry = loader.parse(e.target.result);
            draw(geometry, SelectOneVal, SelectTwoVal);
            console.log(geometry);
        };
        reader.readAsBinaryString(file);
    }
    //-------------------------------------------------------------------------------
    var draw = function (geometry, SelectOneVal, SelectTwoVal) {



        //建立相機
        var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
        // 相機位置 camera.position.set(150, 50, 150);或是下面那樣打都可以
        //相機位置
        camera.position.x = -150;
        camera.position.y = 50;
        camera.position.z = 150;
        //相機焦點
        camera.lookAt(scene.position);
        //---------------------------------------------------------------
        //從專案中把.STL檔案直接Load出來顯示
        //載入材料塊與機台

        //先判斷是哪一個機台與材料塊
        if (SelectOneVal == "機台1" && SelectTwoVal == "材料塊1") {
        //第一個檔案: 材料塊
        loader.load("../Content/stldata/C14.stl", function (geometry) {
            var mat = new THREE.MeshBasicMaterial({
                color: 0xFFFFFF,
                wireframe: true,
                transparent: true,
                opacity: 0.1,
                visible: true
            });
            mesh = new THREE.Mesh(geometry, mat);
            mesh.position.set(0, 0, 0);
            scene.add(mesh);

            /////// 面
            //PlaneGeometry（width：Float，height：Float，widthSegments：Integer，heightSegments ：Integer）
            //width —沿X軸的寬度。默認值為
            //height —沿Y軸的高度。默認值為
            //widthSegments —可選。默認值為
            //heightSegments —可選。默認值為1。
            var geometry3 = new THREE.PlaneBufferGeometry(3, 12, 32);
            var material3 = new THREE.MeshBasicMaterial({ color: 0x808000, side: THREE.DoubleSide, opacity: 0.5, transparent: true, visible: true });
            plane = new THREE.Mesh(geometry3, material3);
            plane.position.set(-7, -4.5, 0);
            plane.rotation.x = -Math.PI * 0.5
            plane.rotation.y = -Math.PI * 0.5
            scene.add(plane);
            //
            var geometry4 = new THREE.PlaneBufferGeometry(3, 12, 32);
            var material4 = new THREE.MeshBasicMaterial({ color: 0x000080, side: THREE.DoubleSide, opacity: 0.5, transparent: true, visible: true });
            plane = new THREE.Mesh(geometry4, material4);
            plane.position.set(-7, -7.5, 0);
            plane.rotation.x = -Math.PI * 0.5
            plane.rotation.y = -Math.PI * 0.5
            scene.add(plane);

            var geometry5 = new THREE.PlaneBufferGeometry(3, 12, 32);
            var material5 = new THREE.MeshBasicMaterial({ color: 0xFFFF00, side: THREE.DoubleSide, opacity: 0.5, transparent: true, visible: true });
            plane = new THREE.Mesh(geometry5, material5);
            plane.position.set(-7, -10.5, 0);
            plane.rotation.x = -Math.PI * 0.5
            plane.rotation.y = -Math.PI * 0.5
            scene.add(plane);

            var geometry6 = new THREE.PlaneBufferGeometry(3, 12, 32);
            var material6 = new THREE.MeshBasicMaterial({ color: 0x00FFFF, side: THREE.DoubleSide, opacity: 0.5, transparent: true, visible: true });
            plane = new THREE.Mesh(geometry6, material6);
            plane.position.set(-7, -13.5, 0);
            plane.rotation.x = -Math.PI * 0.5
            plane.rotation.y = -Math.PI * 0.5
            scene.add(plane);


            var geometry7 = new THREE.PlaneBufferGeometry(3, 12, 32);
            var material7 = new THREE.MeshBasicMaterial({ color: 0x9ACD32, side: THREE.DoubleSide, opacity: 0.5, transparent: true, visible: true });
            plane = new THREE.Mesh(geometry7, material7);
            plane.position.set(-7, -16.5, 0);
            plane.rotation.x = -Math.PI * 0.5
            plane.rotation.y = -Math.PI * 0.5
            scene.add(plane);

            var geometry8 = new THREE.PlaneBufferGeometry(3, 12, 32);
            var material8 = new THREE.MeshBasicMaterial({ color: 0xFFA500, side: THREE.DoubleSide, opacity: 0.5, transparent: true, visible: true });
            plane = new THREE.Mesh(geometry8, material8);
            plane.position.set(-7, -19.5, 0);
            plane.rotation.x = -Math.PI * 0.5
            plane.rotation.y = -Math.PI * 0.5
            scene.add(plane);

            //橫線製作
            //線的顏色 方向先設定
            //const material = new THREE.LineBasicMaterial({ color: 0x0000ff }); //線顏色
            //const materialRed = new THREE.LineBasicMaterial({ color: 'rgb(204,0,0)' }); //線顏色(旁邊中間那條線顏色)
            //const points = [];   //設定線要從哪個方向到哪個方向
            //points.push(new THREE.Vector3(0, 0, -6));
            //points.push(new THREE.Vector3(0, 0, 6));
            //var geometry1 = new THREE.BufferGeometry().setFromPoints(points);

            //const points2 = [];   //設定線要從哪個方向到哪個方向
            //points2.push(new THREE.Vector3(0, 0, 0));
            //points2.push(new THREE.Vector3(0, -1, 0));
            //var geometry3 = new THREE.BufferGeometry().setFromPoints(points2);
            // 我們還需要有集合體(Geometry)或是 緩衝集合體(BufferGeometry) ps:BufferGeometry比Geometry更好 顯示更出色
            //setFromPoints : 設定此包圍盒的上邊界和下邊界，以包含陣列 points 中的所有點

            //const points1 = [];   //設定線要從哪個方向到哪個方向
            //points1.push(new THREE.Vector3(0, 0, 0));
            //points1.push(new THREE.Vector3(0, -1, 0));
            //var geometry2 = new THREE.BufferGeometry().setFromPoints(points1);

            ////第一條線
            //const line1 = new THREE.Line(geometry3, material);
            //line1.position.set(-7, -3, 0);
            ////第二條線
            //const line2 = new THREE.Line(geometry3, material);
            //line2.position.set(-7, -3, 0);
            //-------------------------------------------------------------------------------------------------
            //往下第一條線
            //const line3 = new THREE.Line(geometry1, material);
            //line3.position.set(-7, -3, 0);

            ////往下第二條線
            //const line4 = new THREE.Line(geometry1, material);
            //line4.position.set(-7, -4, 0);

            ////往下第三條線
            //const line5 = new THREE.Line(geometry1, material);
            //line5.position.set(-7, -5, 0);

            ////往下第四條線
            //const line6 = new THREE.Line(geometry1, material);
            //line6.position.set(-7, -6, 0);

            ////往下第五條線
            //const line7 = new THREE.Line(geometry1, material);
            //line7.position.set(-7, -7, 0);

            ////往下第六條線
            //const line8 = new THREE.Line(geometry1, materialRed);
            //line8.position.set(-7, -8, 0);

            ////往下第七條線
            //const line9 = new THREE.Line(geometry1, material);
            //line9.position.set(-7, -9, 0);

            ////往下第八條線
            //const line10 = new THREE.Line(geometry1, material);
            //line10.position.set(-7, -10, 0);

            ////往下第九條線
            //const line11 = new THREE.Line(geometry1, material);
            //line11.position.set(-7, -11, 0);

            ////往下第十條線
            //const line12 = new THREE.Line(geometry1, material);
            //line12.position.set(-7, -12, 0);

            ////往下第十一條線
            //const line13 = new THREE.Line(geometry1, materialRed);
            //line13.position.set(-7, -13, 0);

            ////往下第十二條線
            //const line14 = new THREE.Line(geometry1, material);
            //line14.position.set(-7, -14, 0);

            ////往下第十三條線
            //const line15 = new THREE.Line(geometry1, material);
            //line15.position.set(-7, -15, 0);

            ////往下第十四條線
            //const line16 = new THREE.Line(geometry1, material);
            //line16.position.set(-7, -16, 0);

            ////往下第十五條線
            //const line17 = new THREE.Line(geometry1, material);
            //line17.position.set(-7, -17, 0);

            ////往下第十六條線
            //const line18 = new THREE.Line(geometry1, materialRed);
            //line18.position.set(-7, -18, 0);

            ////往下第十七條線
            //const line19 = new THREE.Line(geometry1, material);
            //line19.position.set(-7, -19, 0);

            ////往下第十八條線
            //const line20 = new THREE.Line(geometry1, material);
            //line20.position.set(-7, -20, 0);
            ////-------------------------------------------------------------------------------------------------
            ////旁邊線
            ////中間第一條線
            //const MiddleLine = new THREE.Line(geometry2, materialRed);
            //MiddleLine.position.set(0, -3, 6);

            ////往前第一條線
            //const Forwardline1 = new THREE.Line(geometry2, material);
            //Forwardline1.position.set(1, -3, 6);

            ////往前第二條線
            //const Forwardline2 = new THREE.Line(geometry2, material);
            //Forwardline2.position.set(2, -3, 6);

            ////往前第三條線
            //const Forwardline3 = new THREE.Line(geometry2, material);
            //Forwardline3.position.set(3, -3, 6);

            ////往前第四條線
            //const Forwardline4 = new THREE.Line(geometry2, material);
            //Forwardline4.position.set(4, -3, 6);

            ////往前第五條線
            //const Forwardline5 = new THREE.Line(geometry2, material);
            //Forwardline5.position.set(5, -3, 6);

            ////往前第六條線
            //const Forwardline6 = new THREE.Line(geometry2, material);
            //Forwardline6.position.set(6, -3, 6);

            ////往前第七條線
            //const Forwardline7 = new THREE.Line(geometry2, material);
            //Forwardline7.position.set(7, -3, 6);
            ////--------------------------------------------------------------------------------------------------------
            ////往後第一條線
            //const backwardline1 = new THREE.Line(geometry2, material);
            //backwardline1.position.set(-1, -3, 6);

            ////往後第二條線
            //const backwardline2 = new THREE.Line(geometry2, material);
            //backwardline2.position.set(-2, -3, 6);

            ////往後第三條線
            //const backwardline3 = new THREE.Line(geometry2, material);
            //backwardline3.position.set(-3, -3, 6);

            ////往後第四條線
            //const backwardline4 = new THREE.Line(geometry2, material);
            //backwardline4.position.set(-4, -3, 6);

            ////往後第五條線
            //const backwardline5 = new THREE.Line(geometry2, material);
            //backwardline5.position.set(-5, -3, 6);

            ////往後第六條線
            //const backwardline6 = new THREE.Line(geometry2, material);
            //backwardline6.position.set(-6, -3, 6);

            ////往後第七條線
            //const backwardline7 = new THREE.Line(geometry2, material);
            //backwardline7.position.set(-7, -3, 6);
            ////--------------------------------------------------------------------------------------------------
            ////scene.add(line1);
            ////scene.add(line2);
            ////正面線
            //scene.add(line3);
            //scene.add(line4);
            //scene.add(line5);
            //scene.add(line6);
            //scene.add(line7);
            //scene.add(line8);
            //scene.add(line9);
            //scene.add(line10);
            //scene.add(line11);
            //scene.add(line12);
            //scene.add(line13);
            //scene.add(line14);
            //scene.add(line15);
            //scene.add(line16);
            //scene.add(line17);
            //scene.add(line18);
            //scene.add(line19);
            //scene.add(line20);
            ////--------------------------------------------------------------------------------------------------
            ////側邊線
            //scene.add(MiddleLine);
            //scene.add(Forwardline1);
            //scene.add(Forwardline2);
            //scene.add(Forwardline3);
            //scene.add(Forwardline4);
            //scene.add(Forwardline5);
            //scene.add(Forwardline6);
            //scene.add(Forwardline7);
            //scene.add(backwardline1);
            //scene.add(backwardline2);
            //scene.add(backwardline3);
            //scene.add(backwardline4);
            //scene.add(backwardline5);
            //scene.add(backwardline6);
            //scene.add(backwardline7);
        });
            //--------------------------------------------------------------------------------------------------
            //第二個檔案: 機台
            loader.load("../Content/stldata/HH.stl", function (geometry) {
                var mat = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
                    color: 0x808080,
                    wireframe: false,
                    //transparent :false,
                    //opacity:1,
                    visible: true
                });
                mesh3 = new THREE.Mesh(geometry, mat);
                mesh3.position.set(0, 0, 0);
                scene.add(mesh3);
            });
        }
        //--------------------------------------------------------------------------------------------------
        else if (SelectOneVal == "機台2" && SelectTwoVal == "材料塊2") {

    }
        //--------------------------------------------------------------------------------------------------
        //這裡要再放第三個第四個...以此類推
        //--------------------------------------------------------------------------------------------------
        var renderer = new THREE.WebGLRenderer({
        antialias: true,       //是否開啟反鋸齒
            precision: "highp",    //著色精度選擇
            alpha: true,           //是否可以設定背景色透明
            premultipliedAlpha: false,
            stencil: false,
            preserveDrawingBuffer: true, //是否儲存繪圖緩衝
            maxLights: 1           //maxLights:最大燈光數
        });//建立渲染器
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor('rgb(190,190,190)', 1.0);//背景顏色
        //renderer.autoClear = false;
        renderer.shadowMapEnabled = true;//告訴渲染器需要渲染出陰影

        document.body.appendChild(renderer.domElement);
        //--------------------------------------------------------------------------------------------------
        //其他設定(監聽螢幕寬高變化來做簡單 RWD 設定)
        window.addEventListener('resize', function () {
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            //這裡是要讓視窗縮小放大同時 牙齒可以隨之移動
        });
        //--------------------------------------------------------------------------------------------------
        //建立旋轉(是3D物體可以360度旋轉)-->建立控制 讓鏡頭旋轉
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
        //const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableZoom = true; //啟用縮放
        controls.enableDamping = true; // 啟用阻尼效果
        controls.dampingFactor = 0.25; // 阻尼系數
        //--------------------------------------------------------------------------------------------------
        //牙齒
        //一種具有鏡面高光的發亮表面的材料。
        var material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
            color: 0xffffff
        });

        //這裡是把3D的資料讀進去以及是否顯示實心或空心模樣、顏色寫入進去
        mesh2 = new THREE.Mesh(geometry, material);
        scene.add(mesh2);
        // 使平面與 y 軸垂直，並讓正面朝上 : 是指將平面「沿著 x 軸正方向逆時針轉 90 度」
        //mesh2.rotation.x = -0.5 * Math.PI;
        //dat1();


        //gui.add(dat1, 'datass', 0, 0.5);





        //線
        const materialForTeeth = new THREE.LineBasicMaterial({color: 'rgb(204,0,0)' }); //線顏色(旁邊中間那條線顏色)
        const pointsForTeeth = [];   //設定線要從哪個方向到哪個方向
        pointsForTeeth.push(new THREE.Vector3(-10, 0, 0));
        pointsForTeeth.push(new THREE.Vector3(10, 10, 0));
        pointsForTeeth.push(new THREE.Vector3(10, 0, 0));
        var geometryForTeeth = new THREE.BufferGeometry().setFromPoints(pointsForTeeth);
        lineForTeeth = new THREE.Line(geometryForTeeth, materialForTeeth);
        lineForTeeth.position.set(0, 0, 0);
        scene.add(lineForTeeth);

        // 指出3D圖形會投射陰影
        geometry.castShadow = true;
        //--------------------------------------------------------------------------------------------------
        //加入點光源
        var light = new THREE.PointLight(0xffffff, 1.0);
        light.position.set(100, 100, 100);
        scene.add(light);
        //--------------------------------------------------------------------------------------------------
        //加入環境光源
        var ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);
        //--------------------------------------------------------------------------------------------------
        //底部做一塊平面板
        const planeGeometry = new THREE.PlaneGeometry(160, 160);
        const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF });
        let plane1 = new THREE.Mesh(planeGeometry, planeMaterial)
        plane1.rotation.x = -0.5 * Math.PI; // 使平面與 y 軸垂直，並讓正面朝上 : 是指將平面「沿著 x 軸正方向逆時針轉 90 度」
        plane1.position.set(0, -50, 0);
        scene.add(plane1);





        //--------------------------------------------------------------------------------------------------
        //(最後)渲染場景
        //產生畫面
        var animate = function () {
        requestAnimationFrame(animate);//它能讓畫面盡可能平滑、高效地進行重新渲染，還有效節省 CPU、GPU 資源，所以一般在 Three.js 會透過它來幫忙重新渲染場景
            renderer.render(scene, camera);
        };





        animate();
    };


    //function dat1() {
        //    var gui = new dat.GUI();
        //    console.log(gui);
        //    gui.add(controls11, 'rotationSpeed', 0, 0.5);

        //    var controls11 = new function () {
        //        this.rotationSpeed = 0.02;
        //        //......
        //    };
        //};

        //-------------------------------------------------------------------------------
        //控制牙齒
        function xAdd() {
            toothX = toothX + 1;
            // 執行變換畫面
            doMoveAdd();
        }
    function xReduce() {
        toothX = toothX - 1;
        // 執行變換畫面
        doMoveReduce();
    }
    function yAdd() {
        toothY = toothY + 1;
        // 執行變換畫面
        doMoveAdd();
    }
    function yReduce() {
        toothY = toothY - 1;
        // 執行變換畫面
        doMoveReduce();
    }
    function zAdd() {
        toothZ = toothZ + 1;
        // 執行變換畫面
        doMoveAdd();
    }
    function zReduce() {
        toothZ = toothZ - 1;
        // 執行變換畫面
        doMoveReduce();
    }

    // 實際執行增加移動
    function doMoveAdd() {
        if (mesh2.position.x < toothX) {
        mesh2.position.x += 1;
        }
        if (mesh2.position.y < toothY) {
        mesh2.position.y += 1;
        }
        if (mesh2.position.z < toothZ) {
        mesh2.position.z += 1;
        }
    }

    // 實際執行增加減少
    function doMoveReduce() {
        if (mesh2.position.x > toothX) {
        mesh2.position.x -= 1;
        }
        if (mesh2.position.y > toothY) {
        //alert(mesh2.position.y);
        mesh2.position.y -= 1;
            if (mesh2.position.y == -2) {
                //碰到紅線 不同顏色
                const woolMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
                    roughness: 1, //粗糙度 0為平滑的鏡面反射 1為完全漫射
                    shading: THREE.FlatShading //著色方式 THREE.FlatShading 对点，直线或多边形采用一种颜色进行绘制，整个图元的颜色就是它的任何一点的颜色。 THREE.SmoothShading; 平滑着色：用多种颜色进行绘制，每个顶点都是单独进行处理的，各顶点和各图元之间采用均匀插值。
                }); //毛的材質
                mesh2.add(woolMaterial); //身體模型綁定材質
            }
        }
        if (mesh2.position.z > toothZ) {
        mesh2.position.z -= 1;
        }
    }
    //-------------------------------------------------------------------------------
    //牙齒上的線上下移動------------------------------------------------------------

    //向上
    function LineUp() {
        LineToothYUP = LineToothYUP + 1;
        console.log(LineToothYUP);
        // 執行變換畫面
        doMoveLineAdd();
    }

    //向下
    function LineDown() {
        LineToothYDOWN = LineToothYDOWN - 1;
        // 執行變換畫面
        doMoveLineReduce();
    }
    //-------------------------------------------------------------
    //向上
    function doMoveLineAdd() {
        if (lineForTeeth.position.y < LineToothYUP) {
        console.log(lineForTeeth.position.y);
            lineForTeeth.position.y += 1;
        }
    }

    //向下
    function doMoveLineReduce() {
        if (lineForTeeth.position.y > LineToothYDOWN) {
        lineForTeeth.position.y -= 1;
        }
    }
    //-------------------------------------------------------------
    function TeethTurn() {
        //    ToothXturn++;
        //    //alert(mesh2.rotation.x);//-1.5707963267948966
        //    if (mesh2.rotation.x < ToothXturn) {
        //        mesh2.rotation.x++;
        //    }
        mesh2.rotation.x++;
    }
    //----------------------------------------------------------------
    function ClearTeeth() {
        scene.remove(mesh, mesh2, mesh3);
        scene.remove(geometry3, geometry4, geometry5, geometry6, geometry7, geometry8);
        scene.remove(material3, material4, material5, material6, material7, material8, plane);
    }