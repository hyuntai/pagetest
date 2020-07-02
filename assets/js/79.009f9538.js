(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{463:function(t,v,_){"use strict";_.r(v);var e=_(25),o=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"배치작업-관리"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#배치작업-관리"}},[t._v("#")]),t._v(" 배치작업 관리")]),t._v(" "),_("h2",{attrs:{id:"table-of-contents"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table Of Contents")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#table-of-contents"}},[t._v("Table Of Contents")])]),_("li",[_("a",{attrs:{href:"#리소스"}},[t._v("리소스")]),_("ul",[_("li",[_("a",{attrs:{href:"#리소스-등록"}},[t._v("리소스 등록")])]),_("li",[_("a",{attrs:{href:"#리소스-삭제"}},[t._v("리소스 삭제")])])])]),_("li",[_("a",{attrs:{href:"#job-properties"}},[t._v("Job Properties")]),_("ul",[_("li",[_("a",{attrs:{href:"#general"}},[t._v("General")])]),_("li",[_("a",{attrs:{href:"#condition"}},[t._v("Condition")])]),_("li",[_("a",{attrs:{href:"#schedule"}},[t._v("Schedule")])]),_("li",[_("a",{attrs:{href:"#advanced"}},[t._v("Advanced")])])])]),_("li",[_("a",{attrs:{href:"#master-job-editor"}},[t._v("Master Job Editor")]),_("ul",[_("li",[_("a",{attrs:{href:"#job-신규-등록"}},[t._v("Job 신규 등록")])]),_("li",[_("a",{attrs:{href:"#job-삭제"}},[t._v("Job 삭제")])]),_("li",[_("a",{attrs:{href:"#job-복구-undelete"}},[t._v("Job 복구(Undelete)")])]),_("li",[_("a",{attrs:{href:"#copy-to"}},[t._v("Copy To")])]),_("li",[_("a",{attrs:{href:"#move-to"}},[t._v("Move To")])]),_("li",[_("a",{attrs:{href:"#job-order"}},[t._v("Job Order")])]),_("li",[_("a",{attrs:{href:"#컨텍스트-메뉴"}},[t._v("컨텍스트 메뉴")])]),_("li",[_("a",{attrs:{href:"#데이타-저장-및-배포관리"}},[t._v("데이타 저장 및 배포관리")])])])])])]),_("p"),t._v(" "),_("h2",{attrs:{id:"리소스"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#리소스"}},[t._v("#")]),t._v(" 리소스")]),t._v(" "),_("ul",[_("li",[t._v("배치 작업의 묶음을 리소스라 한다.")]),t._v(" "),_("li",[t._v("일반적으로 배치 서버를 공유하는 비지니스 단위로 할당 하며 "),_("code",[t._v("Lock")]),t._v("을 획득하고 Job에 대해 변경/저장/배포하는 단위가 된다.")]),t._v(" "),_("li",[t._v("준비작업(New Day Procedure)을 수행하는 단위이다. "),_("code",[t._v("Order Time")]),t._v("을 속성으로 가지고 Type에 따라 자동으로 준비작업이 진행될지 수작업으로 진행될지 여부가 결정된다.")]),t._v(" "),_("li",[t._v("Job 이름은 중복을 허용하지만 리소스 이름은 서버에서 유일해야 한다.")])]),t._v(" "),_("br"),t._v(" "),_("img",{attrs:{src:"/menu-masterjobs.png"}}),t._v(" "),_("p",[t._v("리소스 조회, 등록, 변경, 삭제 기능을 지원한다.\n리소스를 선택하고 "),_("img",{attrs:{src:"/btn-edit-open.png"}}),t._v(" 을 누르면 Job 편집화면이 열린다.")]),t._v(" "),_("img",{attrs:{src:"/masterjobs.png"}}),t._v(" "),_("h3",{attrs:{id:"리소스-등록"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#리소스-등록"}},[t._v("#")]),t._v(" 리소스 등록")]),t._v(" "),_("p",[t._v("화면 상단 "),_("img",{attrs:{src:"/ic_new_001.png",alt:"image"}}),t._v(" 버튼을 클릭한다.")]),t._v(" "),_("img",{attrs:{src:"/new-resource.png"}}),t._v(" "),_("br"),t._v(" "),_("p",{staticStyle:{"text-align":"center"}},[t._v(" [step 1. New - 생성] ")]),t._v(" "),_("img",{attrs:{src:"/new-resource-result.png",height:"120",width:"800"}}),t._v(" "),_("p",{staticStyle:{"text-align":"center"}},[t._v(" [step 2. Write - 저장] ")]),t._v(" "),_("img",{attrs:{src:"/masterjobs-write.png",height:"120",width:"800"}}),t._v(" "),_("p",{staticStyle:{"text-align":"center"}},[t._v(" [step 3. Lock - 잠금] ")]),t._v(" "),_("img",{attrs:{src:"/masterjobs-lock.png",height:"120",width:"800"}}),t._v(" "),_("p",{staticStyle:{"text-align":"center"}},[t._v(" [step 4. Uload - 배포] ")]),t._v(" "),_("img",{attrs:{src:"/masterjobs-upload.png",height:"120",width:"800"}}),t._v(" "),_("h3",{attrs:{id:"리소스-삭제"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#리소스-삭제"}},[t._v("#")]),t._v(" 리소스 삭제")]),t._v(" "),_("ul",[_("li",[t._v("삭제할 리소스를 체크하고 Lock을 획득한다.")]),t._v(" "),_("li",[_("img",{attrs:{src:"/ic_delete_001.png",alt:"image"}}),t._v(" 버튼을 눌러 삭제하고, Wirte -> Upload 순으로 진행한다.")]),t._v(" "),_("li",[t._v("삭제된 리소스는 "),_("img",{attrs:{src:"/chk-show-deleted.png"}}),t._v(" 를 선택하면 조회가 가능하다.")]),t._v(" "),_("li",[t._v("삭제된 리소스는 "),_("img",{attrs:{src:"/ic-undelete.png"}}),t._v(" 으로 복구 할 수 있다.")])]),t._v(" "),_("h2",{attrs:{id:"job-properties"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#job-properties"}},[t._v("#")]),t._v(" Job Properties")]),t._v(" "),_("h3",{attrs:{id:"general"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),_("p",[t._v("Job의 기본적인 속성을 조회 하는 화면이다. 화면은 다이어그램에서 Job을 더블 클릭하거나 Job Context 메뉴를 통해 오픈할 수 있다.")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Schedule")]),t._v(" 탭은 Master Job 화면을 통해 오픈했을 경우에만 보인다.")])]),t._v(" "),_("img",{attrs:{src:"/job-properties.png"}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("항목")]),t._v(" "),_("th",[t._v("설명")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Name")]),t._v(" "),_("td",[t._v("Job 이름")])]),t._v(" "),_("tr",[_("td",[t._v("Confirm")]),t._v(" "),_("td",[t._v("Confirm Job 여부 (Confirm Job일 경우 준비 작업때 Hold 상태가 된다)")])]),t._v(" "),_("tr",[_("td",[t._v("Cyclic")]),t._v(" "),_("td",[t._v("Cyclic Job 여부")])]),t._v(" "),_("tr",[_("td",[t._v("Cyclic Option")]),t._v(" "),_("td",[_("a",{attrs:{href:"#cyclic-option"}},[t._v("Cyclic Option")])])]),t._v(" "),_("tr",[_("td",[t._v("Type")]),t._v(" "),_("td",[_("a",{attrs:{href:"#job-type"}},[t._v("Job 유형")]),t._v(" (Dummy, Command, File Transfer)")])]),t._v(" "),_("tr",[_("td",[t._v("Argument")]),t._v(" "),_("td",[t._v("Agent 로 전달될 명령어 혹은 실행 조건(File Transfer)")])]),t._v(" "),_("tr",[_("td",[t._v("Server")]),t._v(" "),_("td",[t._v("배치서버 이름")])]),t._v(" "),_("tr",[_("td",[t._v("Resource")]),t._v(" "),_("td",[t._v("Reousrce 그룹 (논리 그룹, 이 단위로 준비작업이 수행된다.)")])]),t._v(" "),_("tr",[_("td",[t._v("Owner")]),t._v(" "),_("td",[t._v("Agent 명령 실행 계정(Switch User)")])]),t._v(" "),_("tr",[_("td",[t._v("Application")]),t._v(" "),_("td",[t._v("Application 그룹 (논리 그룹)")])]),t._v(" "),_("tr",[_("td",[t._v("Group")]),t._v(" "),_("td",[t._v("Group 그롭 (논리 그룹)")])]),t._v(" "),_("tr",[_("td",[t._v("Node")]),t._v(" "),_("td",[t._v("Node 명, 혹은 hostname")])]),t._v(" "),_("tr",[_("td",[t._v("Duration")]),t._v(" "),_("td",[t._v("Job 지속 기간 ("),_("a",{attrs:{href:"#duration"}},[t._v("Duration")]),t._v(" 참고)")])]),t._v(" "),_("tr",[_("td",[t._v("Required")]),t._v(" "),_("td",[t._v("Job 이 수행하는데 필요한 Quantity")])]),t._v(" "),_("tr",[_("td",[t._v("Schedule-From")]),t._v(" "),_("td",[t._v("Job 이 수행될 시작 시각")])]),t._v(" "),_("tr",[_("td",[t._v("Schedule-To")]),t._v(" "),_("td",[t._v("Job 이 수행될 수 있는 최대 시각 (이 시각 이후 Job 은 pending 상태가 됨)")])]),t._v(" "),_("tr",[_("td",[t._v("Description")]),t._v(" "),_("td",[t._v("Job 설명")])])])]),t._v(" "),_("br"),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",[t._v("리소스 명은 중복을 허용하지 않지만, Job 이름은 중복을 허용한다."),_("br"),t._v("\n따라서, 준비작업 후에도 동일한 Job을 Order 할 수 있다.  (key=order id)")])]),t._v(" "),_("h4",{attrs:{id:"job-type"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#job-type"}},[t._v("#")]),t._v(" Job Type")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Dummy")]),t._v(" : 작업이 실행되지는 않으나 Workflow를 시작하거나 필요에 의해서 합칠 때 사용한다.")]),t._v(" "),_("li",[_("code",[t._v("Command")]),t._v(" : Argument 항목에 정의된 명령을 Agent에 전달하는 일반적인 유형")]),t._v(" "),_("li",[_("code",[t._v("File Transfer")]),t._v(" : Agent , Batch Server 간 파일 전송하는 유형")])]),t._v(" "),_("h4",{attrs:{id:"cyclic-option"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cyclic-option"}},[t._v("#")]),t._v(" Cyclic Option")]),t._v(" "),_("p",[t._v("그림과 같이 Cyclic 체크박스를 체크 하면 Cyclic Option 영역이 활성화 된다.")]),t._v(" "),_("img",{attrs:{src:"/JobProperties_General_003.png",height:"280"}}),t._v(" "),_("ul",[_("li",[t._v("Rerun Every\n"),_("ul",[_("li",[_("code",[t._v("Rerun Every")]),t._v(" 에서 분단위(M:MIN) 혹은 시간단위(H:HOUR) 로 주기를 설정 할 수 있다.")]),t._v(" "),_("li",[_("code",[t._v("From Job's")]),t._v(" 콤보박스에서 S:START, E:END 를 선택 할 수 있고 그 의미는 다음과 같다.\n"),_("ul",[_("li",[t._v("Start : 다음 수행 주기를 Job 시작 시각부터 계산한다.")]),t._v(" "),_("li",[t._v("End : 다음 수행 주기를 Job 종료 시각 부터 계산한다.")])])]),t._v(" "),_("li",[_("code",[t._v("MaxRun")]),t._v(" 에서 최대 반복 횟수를 정할 수 있다. (범위: 1~99, 0=Max)")])])]),t._v(" "),_("li",[t._v("Runat\n"),_("ul",[_("li",[_("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/ic_write_001.png"}}),t._v(" 버튼을 통해 수행할 시각 추가,  "),_("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/ic_eraser_001.png"}}),t._v("\n버튼을 통해 삭제 한다.")])])])]),t._v(" "),_("h4",{attrs:{id:"duration"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[t._v("#")]),t._v(" Duration")]),t._v(" "),_("ul",[_("li",[t._v("완료되지 않은 Job은 Duration(Day)이 지나면 Expire 처리를 한다. (범위: 1~99, 0=Max)")]),t._v(" "),_("li",[t._v("Hold, Error, Running, Unknown 상태인 Job은 Expire 대상에서 제외됨")])]),t._v(" "),_("h3",{attrs:{id:"condition"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#condition"}},[t._v("#")]),t._v(" Condition")]),t._v(" "),_("p",[t._v("Job이 정상적으로 완료되면 Condition "),_("Badge",{attrs:{text:"out",type:"type"}}),t._v(" 이 발행되며 Conditon은 Workflow를 구성할 때 경로를 결정하는 중요한 파라미터가 된다.")],1),t._v(" "),_("blockquote",[_("p",[t._v("다른 Job의 Out-Condition을 In-Condition으로 등록하면 두 Job은 서로 선후행 관계가 성립 됨")])]),t._v(" "),_("p",[t._v("컨디션은 다음의 성격을 가진다.")]),t._v(" "),_("ul",[_("li",[t._v("한 개 이상 Condition 등록이 가능하다.")]),t._v(" "),_("li",[t._v("Condition "),_("Badge",{attrs:{text:"in",type:"type"}}),t._v(" 은 And 혹은 Or 조건을 선택할 수 있다.")],1),t._v(" "),_("li",[t._v("Condition "),_("Badge",{attrs:{text:"out",type:"type"}}),t._v(" 은 완료 후 컨디션을 발행(Add) 혹은 발행된 컨디션을 삭제(Del)할지 선택 가능하다.")],1),t._v(" "),_("li",[t._v("Condition은 선택적으로 등록하지 않거나 다른 Job과 중복해서 등록할 수 있다.")]),t._v(" "),_("li",[t._v("API나 Condition 관리 도구(화면)를 통해서도 Condition 발행이 가능하다.")])]),t._v(" "),_("h4",{attrs:{id:"condition-등록"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#condition-등록"}},[t._v("#")]),t._v(" Condition 등록")]),t._v(" "),_("p",[_("img",{attrs:{src:"/job-prop-condition.png",alt:"image"}})]),t._v(" "),_("ul",[_("li",[t._v("서버에 등록된 컨디션 중에 "),_("img",{attrs:{src:"/ic_find_001.png",alt:"image"}}),t._v("선택 하거나 "),_("img",{attrs:{src:"/ic_write_001.png",alt:"image"}}),t._v("신규 혹은 "),_("img",{attrs:{src:"/ic_copy_001.png",alt:"image"}}),t._v("복사를 한다.")]),t._v(" "),_("li",[_("code",[t._v("Effect")]),t._v(": Condition"),_("Badge",{attrs:{text:"out",type:"type"}}),t._v(" 은 발행(Add) 뿐아니라 이미 발행된 Condition을 삭제(Del) 할 수 있다.")],1),t._v(" "),_("li",[t._v("Condition"),_("Badge",{attrs:{text:"in",type:"type"}}),t._v(" 의 경우 등록 순서에 따라 And/Or 조건이 적용되며, 마지막 레코드의 조건은 무시된다.")],1)]),t._v(" "),_("h3",{attrs:{id:"schedule"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[t._v("#")]),t._v(" Schedule")]),t._v(" "),_("p",[t._v("Schedule 탭에서 Job의 실행(Order)조건을 입력하고, Forecast를 통해 확인할 수 있습니다."),_("br"),t._v("\nPCP는 영역별로 입력된 값을 조합하여 스케쥴링 여부를 결정합니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:"/job-prop-schedule.png",alt:"image"}})]),t._v(" "),_("h4",{attrs:{id:"실행-order-조건"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#실행-order-조건"}},[t._v("#")]),t._v(" 실행(Order) 조건")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("캘린더를 입력하는 경우")])])]),t._v(" "),_("ul",[_("li",[t._v("Days 와 Week에 선택된 값이 있다면 콤보박스의 조건(And/Or)으로 실행 여부를 판단한다.")]),t._v(" "),_("li",[t._v("선택된 캘린더가 존재하면 캘린더의 실행 조건과 함께 판단한다.(And 연산)")]),t._v(" "),_("li",[t._v("마지막으로 Months 와 Active 조건을 더하여 실행 여부를 결정한다.")]),t._v(" "),_("li",[t._v("Days 혹은 Week 중 어느 한 쪽만 선택된 값이 없다면 선택되지 않은 항목은 전체 선택과 동일한 조건으로 간주한다.\n"),_("br")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("strong",[t._v("일자를 지정하는 경우")])])]),t._v(" "),_("ul",[_("li",[t._v("Date 항목을 입력했을 경우에는 Active 조건만 추가할 수 있다.")]),t._v(" "),_("li",[t._v("다른 항목이 입력되었다면 저장 시점에 화면에서 오류로 처리한다.")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",[t._v("캘린더, Days, Week 가 모두 빈칸이면 해당 Job은 실행되지 않습니다."),_("br"),t._v("\nActive 항목이 빈칸이면 전체 기간을 의미 합니다.")])]),t._v(" "),_("h4",{attrs:{id:"forecast"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#forecast"}},[t._v("#")]),t._v(" Forecast")]),t._v(" "),_("p",[t._v("Forecast를 통해 Schedule 탭에서 입력한 조건의 결과를 캘린더 형태로 확인할 수 있다.")]),t._v(" "),_("p",[_("img",{attrs:{src:"/JobProperties_Forecast_001.png",alt:"image"}})]),t._v(" "),_("h3",{attrs:{id:"advanced"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#advanced"}},[t._v("#")]),t._v(" Advanced")]),t._v(" "),_("p",[t._v("그 밖에 Job 완료 후에 후속 작업을 수행하거나, Schedule From/To 항목을 대체할 변수를 지정할 수 있다.")]),t._v(" "),_("p",[_("img",{attrs:{src:"/JobProperties_Advanced_007.png",alt:"image"}})]),t._v(" "),_("h4",{attrs:{id:"post-proc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#post-proc"}},[t._v("#")]),t._v(" Post Proc")]),t._v(" "),_("p",[t._v("Post Proc 영역의 "),_("img",{attrs:{src:"/ic_write_001.png"}}),t._v(" 버튼을 클릭하면 테이블에 새로운 레코드가 생성된다.\nIF절과 THEN 모두 하나 이상의 레코드 등록이 가능하다. 등록 후 "),_("code",[t._v("Use PostProc")]),t._v("를 체크 해야 Runtime 중에 Post Proc이 수행된다.")]),t._v(" "),_("ul",[_("li",[t._v("입력 가능한 값 및 설명")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("IF/THEN")]),t._v(" "),_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Operator/Level")]),t._v(" "),_("th",[t._v("설명")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("IF")]),t._v(" "),_("td",[t._v("EXITCODE")]),t._v(" "),_("td",[t._v("==, >, <, >=, <=")]),t._v(" "),_("td",[t._v("Job Exitcode")])]),t._v(" "),_("tr",[_("td",[t._v("IF")]),t._v(" "),_("td",[t._v("ENDTIME")]),t._v(" "),_("td",[t._v("==, >, <, >=, <=")]),t._v(" "),_("td",[t._v("Job 종료 시각 (hhmmss)")])]),t._v(" "),_("tr",[_("td",[t._v("IF")]),t._v(" "),_("td",[t._v("ELAPSED")]),t._v(" "),_("td",[t._v("==, >, <, >=, <=")]),t._v(" "),_("td",[t._v("Job 수행 시간 (sec)")])]),t._v(" "),_("tr",[_("td",[t._v("IF")]),t._v(" "),_("td",[t._v("TRUE")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("True")])]),t._v(" "),_("tr",[_("td",[t._v("THEN")]),t._v(" "),_("td",[t._v("OK")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Job 상태변경 Complete")])]),t._v(" "),_("tr",[_("td",[t._v("THEN")]),t._v(" "),_("td",[t._v("NOTOK")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Job 상태변경 NotOk")])]),t._v(" "),_("tr",[_("td",[t._v("THEN")]),t._v(" "),_("td",[t._v("STOPCYCLIC")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Cyclic Job 일 경우, Stop 시킴")])]),t._v(" "),_("tr",[_("td",[t._v("THEN")]),t._v(" "),_("td",[t._v("ALARM WINDOW")]),t._v(" "),_("td",[t._v("WARN, INFO, CRITICAL")]),t._v(" "),_("td",[t._v("알람창(Popup) 으로 메세지 전송")])]),t._v(" "),_("tr",[_("td",[t._v("THEN")]),t._v(" "),_("td",[t._v("EVENT MESSAGE")]),t._v(" "),_("td",[t._v("WARN, INFO, CRITICAL")]),t._v(" "),_("td",[t._v("Event log 에 message 출력")])])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",[t._v("메세지 컬럼에는 "),_("em",[t._v("시스템 변수")]),t._v('를 사용할 수 있습니다. ex) "%JOBNM% is Error!"'),_("br"),t._v("\n사용 가능한 변수는 Tool>Valiables 에서 확인 가능 합니다.")])]),t._v(" "),_("h4",{attrs:{id:"variables"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),_("p",[t._v("준비작업 시, 등록된 변수 정보를 획득하여 Schedule From/To 항목을 대체한다."),_("br"),t._v("\n등록된 변수는 "),_("code",[t._v("Use Variables")]),t._v(" 를 체크 해야 적용이 된다.")]),t._v(" "),_("p",[_("img",{attrs:{src:"/JobProperties_Advanced_009.png",alt:"image"}})]),t._v(" "),_("p",[_("strong",[_("code",[t._v("Name")])]),t._v(": From 혹은 To"),_("br"),t._v(" "),_("strong",[_("code",[t._v("Var")])]),t._v(": "),_("em",[t._v("사용자 등록 변수")]),t._v(" 명")]),t._v(" "),_("ul",[_("li",[t._v("Var에 입력 가능한 변수명은 Tools > "),_("RouterLink",{attrs:{to:"/manual/variables.html"}},[t._v("Variables")]),t._v(" 에서 사용자가 직접 등록한다.")],1),t._v(" "),_("li",[t._v("Job 실행 시간을 변수로 지정하면 특정 기간의 시간 조건을 Job을 재 등록하지 않고 변수의 값만 변경하여 적용할 수 있다.")]),t._v(" "),_("li",[t._v("사용자 변수의 기본 값과 변경 적용 일자등은 Variables 관리 화면에서 할수 있다.")])]),t._v(" "),_("h2",{attrs:{id:"master-job-editor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#master-job-editor"}},[t._v("#")]),t._v(" Master Job Editor")]),t._v(" "),_("p",[t._v("DB로 부터 Job 정보를 Load 하여 Flowchart 형태로 확인하고, Job 변경관리를 도와주는 도구이다."),_("br"),t._v("\nToday Order, Copy To/Move To 등의 부가기능도 제공한다.")]),t._v(" "),_("h3",{attrs:{id:"job-신규-등록"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#job-신규-등록"}},[t._v("#")]),t._v(" Job 신규 등록")]),t._v(" "),_("p",[t._v("Editor는 리소스 관리 화면에서 "),_("img",{attrs:{src:"/btn-edit-open.png"}}),t._v("를 클릭하거나, Import 를 하면 열린다.")]),t._v(" "),_("ol",[_("li",[t._v("리소스 "),_("code",[t._v("Lock")]),t._v(" 획득")])]),t._v(" "),_("img",{attrs:{src:"/new-job-lock.png",height:"400"}}),t._v(" "),_("ul",[_("li",[_("code",[t._v("Resource 영역 컨텍스트 메뉴")]),t._v(" -> "),_("code",[t._v("Resource")]),t._v(" -> "),_("code",[t._v("Lock")]),t._v(" 클릭")]),t._v(" "),_("li",[t._v("Lock 을 획득하면 다음과 같이 Resource 이름 오른쪽에 Lock 정보를 확인할 수 있다.")])]),t._v(" "),_("img",{attrs:{src:"/new-job-text.png"}}),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("Job 추가")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Resource 영역 컨텍스트 메뉴")]),t._v(" -> "),_("code",[t._v("Add Job")]),t._v(" 클릭으로 "),_("code",[t._v("Job Properties")]),t._v(" 화면 Open")]),t._v(" "),_("li",[_("code",[t._v("Job Properties")]),t._v(" 화면에서 Job 상세 정보 입력 ("),_("code",[t._v("Job Properties")]),t._v(" 화면 참고)")]),t._v(" "),_("li",[t._v("Job 등록을 하면 다음과 같이 새로운 다이어그램이 생성된다."),_("br"),t._v(" "),_("img",{attrs:{src:"/MasterJob_005_AddJob1.png",alt:"image"}})]),t._v(" "),_("li",[t._v("Job 복사기능으로도 새로운 Job 을 생성 할 수 있다. "),_("code",[t._v("Job 다이어그램 컨텍스트 메뉴")]),t._v(" -> "),_("code",[t._v("Copy(&Edit)")]),t._v(" 혹은 "),_("code",[t._v("Copy")])])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("code",[t._v("Write")]),t._v(" 수행")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Resource 영역 컨텍스트 메뉴")]),t._v(" -> "),_("code",[t._v("Resource")]),t._v(" -> "),_("code",[t._v("Write")]),t._v(" 클릭")]),t._v(" "),_("li",[t._v("Write 가 수행되면 다음과 같이 다이그램 상태가 바뀐다."),_("br"),t._v(" "),_("img",{attrs:{src:"/MasterJob_006_Write1.png",alt:"image"}})])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[_("code",[t._v("Upload")]),t._v(" 수행")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Resource 영역 컨텍스트 메뉴")]),t._v(" -> "),_("code",[t._v("Resource")]),t._v(" -> "),_("code",[t._v("Upload")]),t._v(" 클릭")])]),t._v(" "),_("h3",{attrs:{id:"job-삭제"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#job-삭제"}},[t._v("#")]),t._v(" Job 삭제")]),t._v(" "),_("p",[t._v("삭제 전 "),_("code",[t._v("Resource Lock")]),t._v(" 및 삭제 후 "),_("code",[t._v("Write")]),t._v("/"),_("code",[t._v("Update")]),t._v(" 는 Job 등록과 동일하다.")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("Resoruce Lock")]),t._v(" 획득")]),t._v(" "),_("li",[t._v("다이어그램 에서 삭제 할 Job 선택 및 "),_("code",[t._v("Delete")]),t._v(" 수행")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Job 다이어그램 컨텍스트 메뉴")]),t._v(" -> "),_("code",[t._v("Delete")]),t._v(" 클릭")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[_("code",[t._v("Wrtie")]),t._v(" 수행")]),t._v(" "),_("li",[_("code",[t._v("Upload")]),t._v(" 수행")])]),t._v(" "),_("h3",{attrs:{id:"job-복구-undelete"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#job-복구-undelete"}},[t._v("#")]),t._v(" Job 복구(Undelete)")]),t._v(" "),_("p",[t._v("이미 삭제된 Job 에 대해서 복구가 가능하다. 복구 전 "),_("code",[t._v("Resource Lock")]),t._v(" 및 복구 후 "),_("code",[t._v("Write")]),t._v("/"),_("code",[t._v("Update")]),t._v(" 는 Job 등록과 동일하다.")]),t._v(" "),_("img",{attrs:{src:"/job-undelete.png"}}),t._v(" "),_("ol",[_("li",[_("code",[t._v("Resoruce Lock")]),t._v(" 획득")]),t._v(" "),_("li",[_("code",[t._v("Undelete list")]),t._v(" 화면 Open\n"),_("ul",[_("li",[t._v("Resource 영역 컨텍스트 메뉴 -> "),_("code",[t._v("Undelete")]),t._v(" 클릭")])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#undelete-%ED%99%94%EB%A9%B4"}},[_("code",[t._v("Undelete 화면")])]),t._v(" 에서 Undelete 수행")]),t._v(" "),_("li",[_("code",[t._v("Wrtie")]),t._v(" 수행")]),t._v(" "),_("li",[_("code",[t._v("Upload")]),t._v(" 수행")])]),t._v(" "),_("h3",{attrs:{id:"copy-to"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#copy-to"}},[t._v("#")]),t._v(" Copy To")]),t._v(" "),_("p",[t._v("연결된 Job의 일부 그룹을 다른 Job의 후행으로 붙여넣기를 할 수 있다.")]),t._v(" "),_("ul",[_("li",[t._v("Copy To 절차")])]),t._v(" "),_("img",{attrs:{src:"/copyto-proc.png",height:"500"}}),t._v(" "),_("ol",[_("li",[t._v("Shift 를 누르고 복사하고자 하는 그룹의 Root Job을 Select 상태로 만든다.")]),t._v(" "),_("li",[t._v("붙여넣기를 하고자하는 Job 위에 마우스를 올리고 우클릭 -> Copy To를 선택한다.")]),t._v(" "),_("li",[t._v("복사후 생성될 Job 이름의 prefix를 입력한다.")]),t._v(" "),_("li",[t._v("OK버튼 클릭")])]),t._v(" "),_("ul",[_("li",[t._v("Copy To 결과")])]),t._v(" "),_("img",{attrs:{src:"/copyto-result.png",height:"500"}}),t._v(" "),_("h3",{attrs:{id:"move-to"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#move-to"}},[t._v("#")]),t._v(" Move To")]),t._v(" "),_("p",[t._v("연결된 Job의 일부 그룹을 다른 Job의 후행으로 이동시킬 수 있다.")]),t._v(" "),_("ul",[_("li",[t._v("Move To 절차")])]),t._v(" "),_("img",{attrs:{src:"/moveto-proc.png",height:"500"}}),t._v(" "),_("ol",[_("li",[t._v("Shift 를 누르고 이동하고자 하는 그룹의 Root Job을 Select 상태로 만든다.")]),t._v(" "),_("li",[t._v("붙여넣기를 하고자하는 Job 위에 마우스를 올리고 우클릭 -> Move To를 선택한다.")])]),t._v(" "),_("ul",[_("li",[t._v("Move To 결과")])]),t._v(" "),_("img",{attrs:{src:"/moveto-result.png",height:"340"}}),t._v(" "),_("h3",{attrs:{id:"job-order"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#job-order"}},[t._v("#")]),t._v(" Job Order")]),t._v(" "),_("p",[t._v("개별 Job을 동적으로 준비작업 수행 할 수 있다.")]),t._v(" "),_("ul",[_("li",[t._v("Job Order 절차")])]),t._v(" "),_("img",{attrs:{src:"/today-order.png",height:"300"}}),t._v(" "),_("ol",[_("li",[t._v("Order Job 선택")]),t._v(" "),_("li",[t._v("선택 메뉴에서 Order Date를 확인하고, 옵션을 선택한다.")]),t._v(" "),_("li",[t._v("OK버튼 클릭")])]),t._v(" "),_("ul",[_("li",[t._v("Job Order 결과")])]),t._v(" "),_("img",{attrs:{src:"/today-order-res.png",height:"340"}}),t._v(" "),_("ul",[_("li",[t._v("Order Option\n"),_("ul",[_("li",[_("code",[t._v("OrderDate")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("ODAT")]),t._v(" (시스템일자) 혹은 사용자 선택")])])]),t._v(" "),_("li",[_("code",[t._v("Upload Job and Ordering")]),t._v(" : 변경(write) 된 Job 인 경우, Upload 수행 후 Order를 수행한다.")]),t._v(" "),_("li",[_("code",[t._v("Force Order(Ignore Schedule data)")]),t._v(" : 스케쥴링 조건에 맞지 않더라도 강제로 Order 한다.")]),t._v(" "),_("li",[_("code",[t._v("Order With Hold")]),t._v(" : Hold 상태로 Order 한다.")])])])]),t._v(" "),_("h3",{attrs:{id:"컨텍스트-메뉴"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#컨텍스트-메뉴"}},[t._v("#")]),t._v(" 컨텍스트 메뉴")]),t._v(" "),_("h4",{attrs:{id:"resource-영역-켄텍스트-메뉴"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#resource-영역-켄텍스트-메뉴"}},[t._v("#")]),t._v(" Resource 영역 켄텍스트 메뉴")]),t._v(" "),_("p",[_("img",{attrs:{src:"/MasterJob_004_ContextMenu3.png",alt:"image"}})]),t._v(" "),_("ul",[_("li",[t._v("컨텍스트 메뉴 설명\n"),_("ul",[_("li",[_("code",[t._v("Add Job")]),t._v(" : 새로운 Job 추가 (Job preperties 화면 Open)")]),t._v(" "),_("li",[_("code",[t._v("View")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Write List")]),t._v(" : Write 대상 출력 화면 Open")]),t._v(" "),_("li",[_("code",[t._v("Upload List")]),t._v(" : Upload 대상 출력 화면 Open")]),t._v(" "),_("li",[_("code",[t._v("All List")]),t._v(" : Write List, Update List 출력 화면 Open")])])]),t._v(" "),_("li",[_("code",[t._v("Resource")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Lock")]),t._v(" : Resource Lock 획득")]),t._v(" "),_("li",[_("code",[t._v("Unlock")]),t._v(" : Resource Lock 반납")]),t._v(" "),_("li",[_("code",[t._v("Download")]),t._v(" : 마지막으로 Upload (배포) 했던 내용 Download (Overwrite)")]),t._v(" "),_("li",[_("code",[t._v("Write")]),t._v(" : 작업중인 Job 정보 DB 저장 (배포 아님)")]),t._v(" "),_("li",[_("code",[t._v("Reload")]),t._v(" : Resource 다시 Load")]),t._v(" "),_("li",[_("code",[t._v("Upload")]),t._v(" : DB 에 저장된 내용 배포")])])]),t._v(" "),_("li",[_("code",[t._v("Undelete")]),t._v(" : Deleted Job 리스트 화면 Open (삭제했던 Job 복구 가능)")]),t._v(" "),_("li",[_("code",[t._v("Export")]),t._v(" : 등록된 Resource, Job 정보를 json 형태의 파일로 출력")]),t._v(" "),_("li",[_("code",[t._v("Import")]),t._v(" : Json 형태의 Resource, Job 정보를 화면으로 Load")]),t._v(" "),_("li",[_("code",[t._v("Reset Master Editor")]),t._v(" : Master Jobs 화면 Open")]),t._v(" "),_("li",[_("code",[t._v("Collapse")]),t._v(" : 확장 되어 있는 Resource 영역을 축소 함")]),t._v(" "),_("li",[_("code",[t._v("Expend")]),t._v(": 축소 되어 있는 Resource 영역을 확장 함")]),t._v(" "),_("li",[_("code",[t._v("Job Order All")]),t._v(" : 해당 Resource 에 등록되어 있는 모든 Job에 대해 Job Order 수행")])])])]),t._v(" "),_("h4",{attrs:{id:"job-다이어그램-컨텍스트-메뉴"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#job-다이어그램-컨텍스트-메뉴"}},[t._v("#")]),t._v(" Job 다이어그램 컨텍스트 메뉴")]),t._v(" "),_("p",[_("img",{attrs:{src:"/MasterJob_004_ContextMenu4.png",alt:"image"}})]),t._v(" "),_("ul",[_("li",[t._v("컨텍스트 메뉴 설명\n"),_("ul",[_("li",[_("code",[t._v("Copy(&Edit)")]),t._v(" :  선택된 Job 복사 (새로운 Job 추가) 후 Job preperties 화면 Open")]),t._v(" "),_("li",[_("code",[t._v("Copy")]),t._v(" :  선택된 Job 복사 (새로운 Job 추가)")]),t._v(" "),_("li",[_("code",[t._v("Delete")]),t._v(" :선택된 Job 삭제")]),t._v(" "),_("li",[_("code",[t._v("Clear")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Prerelation")]),t._v(" : 선행 Job Relation 삭제 (In Condition 삭제)")]),t._v(" "),_("li",[_("code",[t._v("Postrelation")]),t._v(" : 후행 Job Relation 삭제 (Out Condition 삭제)")])])]),t._v(" "),_("li",[_("code",[t._v("Order Job")]),t._v(" : 선택된 Job 을 특정 날짜로 준비작업 즉시 수행")]),t._v(" "),_("li",[_("code",[t._v("Properties")]),t._v(" : Job Preperties 화면 Open")])])])]),t._v(" "),_("h3",{attrs:{id:"데이타-저장-및-배포관리"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#데이타-저장-및-배포관리"}},[t._v("#")]),t._v(" 데이타 저장 및 배포관리")]),t._v(" "),_("ul",[_("li",[t._v("중요 데이타인 "),_("strong",[t._v("리소스, 캘린더, Job")]),t._v(" 정보는 변경 후에 "),_("code",[t._v("write")]),t._v("와 "),_("code",[t._v("upload")]),t._v("를 완료해야 서버에 반영됨\n"),_("ul",[_("li",[_("code",[t._v("wirte")]),t._v(" : 화면에서 변경한 데이터를 DB에 저장한다.")]),t._v(" "),_("li",[_("code",[t._v("upload")]),t._v(" : 일종의 배포 과정으로 DB에 마지막으로 저장된 데이터를 서버 적용 대상 버전으로 변경")]),t._v(" "),_("li",[_("code",[t._v("download")]),t._v(" : 마지막으로 저장된 레크드를 upload 상태의 데이터로 대체")])])])]),t._v(" "),_("p",[_("br"),_("br")])])}),[],!1,null,null,null);v.default=o.exports}}]);