var CanvasParticle = (function () {
    function getElementByTag(name) {
        return document.getElementsByTagName(name);
    }

    function getELementById(id) {
        return document.getElementById(id);
    }

    // 鏍规嵁浼犲叆鐨刢onfig鍒濆鍖栫敾甯�
    function canvasInit(canvasConfig) {
        canvasConfig = canvasConfig || {};
        var html = getElementByTag("html")[0];
        // 鑾峰彇body浣滀负鑳屾櫙
        // var body = getElementByTag("body")[0];

        // 鑾峰彇鐗瑰畾div浣滀负鑳屾櫙
        // mydiv鏄綘鎯宠灏嗗叾浣滀负鑳屾櫙鐨刣iv鐨処D
        var body = document.getElementById("mydiv");
        var canvasObj = document.createElement("canvas");

        var canvas = {
            element: canvasObj,
            points: [],
            // 榛樿閰嶇疆
            config: {
                vx: canvasConfig.vx || 4,
                vy: canvasConfig.vy || 4,
                height: canvasConfig.height || 2,
                width: canvasConfig.width || 2,
                count: canvasConfig.count || 100,
                color: canvasConfig.color || "121, 162, 185",
                stroke: canvasConfig.stroke || "130,255,255",
                dist: canvasConfig.dist || 6000,
                e_dist: canvasConfig.e_dist || 20000,
                max_conn: 10
            }
        };

        // 鑾峰彇context
        if (canvas.element.getContext("2d")) {
            canvas.context = canvas.element.getContext("2d");
        } else {
            return;
        }

        body.style.padding = "0";
        body.style.margin = "0";
        // body.replaceChild(canvas.element, canvasDiv);
        body.appendChild(canvas.element);

        /*canvas.element.style = "position: fixed; top: 0; left: 0;z-index:2";*/
        canvasSize(canvas.element);
        window.onresize = function () {
            canvasSize(canvas.element);
        }

        /*
         * body.onmousemove = function(e) { var event = e || window.event;
         * canvas.mouse = { x : event.clientX, y : event.clientY } }
         */

        document.onmousemove = function (e) {
            var event = e || window.event;
            canvas.mouse = {
                x: event.clientX,
                y: event.clientY
            }
        }

        document.onmouseleave = function () {
            canvas.mouse = undefined;
        }
        setInterval(function () {
            drawPoint(canvas);
        }, 40);
    }

    // 璁剧疆canvas澶у皬
    function canvasSize(canvas) {
        // 鑾峰彇绐楀彛鐨勫楂�
        // canvas.width = window.innerWeight ||
        // document.documentElement.clientWidth || document.body.clientWidth;
        // canvas.height = window.innerWeight ||
        // document.documentElement.clientHeight || document.body.clientHeight;

        // 鑾峰彇鐗瑰畾div鐨勫楂�
        /*
         * var width = document.getElementById("mydiv").style.width; var height =
         * document.getElementById("mydiv").style.height;
         */
        var width = document.getElementById("mydiv").clientWidth;
        var height = document.getElementById("mydiv").clientHeight;
        width = parseInt(width);
        height = parseInt(height);
        canvas.width = width || window.innerWeight || document.documentElement.clientWidth || document.body.clientWidth;
        canvas.height = height || window.innerWeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    // 鐢荤偣
    function drawPoint(canvas) {
        var context = canvas.context, point, dist;
        context.clearRect(0, 0, canvas.element.width, canvas.element.height);
        context.beginPath();
        context.fillStyle = "rgb(" + canvas.config.color + ")";
        for (var i = 0, len = canvas.config.count; i < len; i++) {
            if (canvas.points.length != canvas.config.count) {
                // 鍒濆鍖栨墍鏈夌偣
                point = {
                    x: Math.floor(Math.random() * canvas.element.width),
                    y: Math.floor(Math.random() * canvas.element.height),
                    vx: canvas.config.vx / 2 - Math.random() * canvas.config.vx,
                    vy: canvas.config.vy / 2 - Math.random() * canvas.config.vy
                }
            } else {
                // 澶勭悊鐞冪殑閫熷害鍜屼綅缃紝骞朵笖鍋氳竟鐣屽鐞�
                point = borderPoint(canvas.points[i], canvas);
            }
            context.fillRect(point.x - canvas.config.width / 2, point.y - canvas.config.height / 2, canvas.config.width, canvas.config.height);

            canvas.points[i] = point;
        }
        drawLine(context, canvas, canvas.mouse);
        context.closePath();
    }

    // 杈圭晫澶勭悊
    function borderPoint(point, canvas) {
        var p = point;
        if (point.x <= 0 || point.x >= canvas.element.width) {
            p.vx = -p.vx;
            p.x += p.vx;
        } else if (point.y <= 0 || point.y >= canvas.element.height) {
            p.vy = -p.vy;
            p.y += p.vy;
        } else {
            p = {
                x: p.x + p.vx,
                y: p.y + p.vy,
                vx: p.vx,
                vy: p.vy
            }
        }
        return p;
    }

    // 鐢荤嚎
    function drawLine(context, canvas, mouse) {
        context = context || canvas.context;
        for (var i = 0, len = canvas.config.count; i < len; i++) {
            // 鍒濆鍖栨渶澶ц繛鎺ユ暟
            canvas.points[i].max_conn = 0;
            // point to point
            for (var j = 0; j < len; j++) {
                if (i != j) {
                    dist = Math.round(canvas.points[i].x - canvas.points[j].x) * Math.round(canvas.points[i].x - canvas.points[j].x) + Math.round(canvas.points[i].y - canvas.points[j].y) * Math.round(canvas.points[i].y - canvas.points[j].y);
                    // 涓ょ偣璺濈灏忎簬鍚搁檮璺濈锛岃€屼笖灏忎簬鏈€澶ц繛鎺ユ暟锛屽垯鐢荤嚎
                    if (dist <= canvas.config.dist && canvas.points[i].max_conn < canvas.config.max_conn) {
                        canvas.points[i].max_conn++;
                        // 璺濈瓒婅繙锛岀嚎鏉¤秺缁嗭紝鑰屼笖瓒婇€忔槑
                        context.lineWidth = 0.5 - dist / canvas.config.dist;
                        context.strokeStyle = "rgba(" + canvas.config.stroke + "," + (1 - dist / canvas.config.dist) + ")"
                        context.beginPath();
                        context.moveTo(canvas.points[i].x, canvas.points[i].y);
                        context.lineTo(canvas.points[j].x, canvas.points[j].y);
                        context.stroke();

                    }
                }
            }
            // 濡傛灉榧犳爣杩涘叆鐢诲竷
            // point to mouse
            if (mouse) {
                dist = Math.round(canvas.points[i].x - mouse.x) * Math.round(canvas.points[i].x - mouse.x) + Math.round(canvas.points[i].y - mouse.y) * Math.round(canvas.points[i].y - mouse.y);
                // 閬囧埌榧犳爣鍚搁檮璺濈鏃跺姞閫燂紝鐩存帴鏀瑰彉point鐨剎锛寉鍊艰揪鍒板姞閫熸晥鏋�
                if (dist > canvas.config.dist && dist <= canvas.config.e_dist) {
                    canvas.points[i].x = canvas.points[i].x + (mouse.x - canvas.points[i].x) / 20;
                    canvas.points[i].y = canvas.points[i].y + (mouse.y - canvas.points[i].y) / 20;
                }
                if (dist <= canvas.config.e_dist) {
                    context.lineWidth = 1;
                    context.strokeStyle = "rgba(" + canvas.config.stroke + "," + (1 - dist / canvas.config.e_dist) + ")";
                    context.beginPath();
                    context.moveTo(canvas.points[i].x, canvas.points[i].y);
                    context.lineTo(mouse.x, mouse.y);
                    context.stroke();
                }
            }
        }
    }

    return canvasInit;
})();