function ConfirmDialog(message) {
    $('<div></div>').appendTo('body')
        .html('<div style="font-size: 1rem;line-height: 1.4em;font-family: \"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;">' + message + '</div>')
        .dialog({
            modal: true,
            title: 'Are you sure?',
            zIndex: 10000,
            autoOpen: true,
            heigth: "200px",
            width: "400px",
            resizable: false,
            buttons: {
                Yes: function () {
                    $('#register-consent').prop("checked", false);
                    dialog_count = 1;
                    $(this).dialog("close");
                },
                No: function () {
                    $('#register-consent').prop("checked", true);
                    dialog_count = 1;
                    $(this).dialog("close");
                }
            },
            close: function (event, ui) {
                $(this).remove();
            }
        });
};

function sortTable(identifier) {
    //get the parent table for convenience
    let table = document.getElementById(identifier);

    //1. get all rows
    let rowsCollection = table.querySelectorAll("tr");

    //2. convert to array
    let rows = Array.from(rowsCollection)
        .slice(1); //skip the header row

    //3. shuffle
    shuffleArray(rows);

    //4. add back to the DOM
    // for (const row of rows) {
    //   row.style.setProperty("background-color","rgba(6,86,131, .15)");
    //   table.appendChild(row);
    // }
    for (var i = 0; i < rows.length; i++) {
        row = rows[i];
        if ((i % 2) == 0) {
            row.style.setProperty("background-color", "rgba(6,86,131, .15)");
        }
        table.appendChild(row);
    }

}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

set_fields_visible = function () {
    var table_1 = `
   <div style="margin-top:0px;padding-top:30px;padding-bottom:10px;" class="label-text intro-table">Please rate your level of agreement with the following statements:
    <table cellpadding="0" cellspacing="0" border="0" style="table-layout: fixed;width: 100%;" class="table table-striped radiogrid">
  <colgroup>
      <col style="width:50%;"/>
      <col style="width:10%;"/>
      <col style="width:10%;"/>
      <col style="width:10%;"/>
      <col style="width:10%;"/>
      <col style="width:10%;"/>
  </colgroup>
    <thead>
        <tr>
                <th class="label_edx">&nbsp;</th>
                <th class="label_edx">Strongly disagree</th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx">Strongly agree</th>
        </tr>
        <tr>
                <th class="colt_edx">&nbsp;</th>
                <th class="colt_edx">1</th>
                <th class="colt_edx">2</th>
                <th class="colt_edx">3</th>
                <th class="colt_edx">4</th>
                <th class="colt_edx">5</th>
        </tr>
    </thead>
    <tbody>
            <tr> <!-- Data Analytics, IITP -->
                <td class="question_edx">Applied data analytics and machine learning is important for my future career.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-importance_DAEI" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-importance_DAEI" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-importance_DAEI" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-importance_DAEI" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-importance_DAEI" value="5"></td>
            </tr>
         <tr>
                <td class="question_edx">It is important to me to achieve a very good grade (between 1.0 and 1.7) in the ADAML course.</td>
                <td class="likert_edx"><input type="radio" name="radio-register-motivation_DAEI" value="1"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-motivation_DAEI" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-motivation_DAEI" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-motivation_DAEI" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-motivation_DAEI" value="5"></td>
            </tr>
    </tbody>
</table></div>`;

    var table_2 = `
   <div style="margin-top:0px;padding-top:0px;padding-bottom:10px;border-top: 1px solid rgba(6,86,131, .05);" class="label-text intro-table">Do you often ...
    <table cellpadding="0" cellspacing="0" border="0" style="table-layout: fixed;width: 100%;" class="table table-striped radiogrid">
  <colgroup>
      <col style="width:40%;"/>
      <col style="width:12%;"/>
      <col style="width:12%;"/>
      <col style="width:12%;"/>
      <col style="width:12%;"/>
      <col style="width:12%;"/>
  </colgroup>
    <thead>
        <tr>
                <th class="label_edx">&nbsp;</th>
                <th class="label_edx">Never</th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx">Often</th>
        </tr>
        <tr>
                <th>&nbsp;</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td class="question_edx">... measure your performance against self-set goals?</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-measure_self_set_goals" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-measure_self_set_goals" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-measure_self_set_goals" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-measure_self_set_goals" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-measure_self_set_goals" value="5"></td>
            </tr>
         <tr>
                <td class="question_edx">... measure your performance against the performance of people around you?</td>
                <td class="likert_edx"><input type="radio" name="radio-register-measure_around_you" value="1"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-measure_around_you" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-measure_around_you" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-measure_around_you" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-measure_around_you" value="5"></td>
         </tr>
           <tr>
                <td style="padding-top:22px !important;" class="question_edx">... procrastinate?</td>
                <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="1"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="5"></td>
            </tr>
    </tbody>
</table></div>`;
    /*
       var table_3 = `
       <div style="margin-top:0px;padding-top:30px;padding-bottom:30px;" class="label-text intro-table">Please answer the following statement:
        <table cellpadding="0" cellspacing="0" border="0" style="table-layout: fixed;width: 100%;" class="table table-striped radiogrid">
      <colgroup>
          <col style="width:25%;"/>
          <col style="width:15%;"/>
          <col style="width:15%;"/>
          <col style="width:15%;"/>
          <col style="width:15%;"/>
          <col style="width:15%;"/>
      </colgroup>
        <thead>
            <tr>
                    <th class="label_edx">&nbsp;</th>
                    <th class="label_edx">Never</th>
                    <th class="label_edx">Seldom</th>
                    <th class="label_edx">Sometimes</th>
                    <th class="label_edx">Often</th>
                    <th class="label_edx">Almost always</th>
            </tr>
        </thead>
        <tbody>
                <tr>
                    <td class="question_edx">How often do you procrastinate?</td>
                    <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="1"></td>
                    <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="2"></td>
                    <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="3"></td>
                    <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="4"></td>
                    <td class="likert_edx"><input type="radio" name="radio-register-procrastinate" value="5"></td>
                </tr>
        </tbody>
    </table></div>`;
    */
    var table_4 = `
   <div style="margin-top:0px;padding-top:0px;padding-bottom:10px;border-top: 1px solid rgba(6,86,131, .05);" class="label-text intro-table">
    <table cellpadding="0" cellspacing="0" border="0" style="table-layout: fixed;width: 100%;" class="table table-striped radiogrid">
  <colgroup>
      <col style="width:50%;"/>
      <col style="width:10%;"/>
      <col style="width:10%;"/>
      <col style="width:10%;"/>
      <col style="width:10%;"/>
      <col style="width:10%;"/>
  </colgroup>
    <thead>
        <tr>
                <th class="label_edx">&nbsp;</th>
                <th class="label_edx">Very rarely</th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx">Very often</th>
        </tr>
        <tr>
                <th>&nbsp;</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td class="question_edx">I formulate learning objectives, which I then use to guide my studying.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-zp1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp1" value="5"></td>
            </tr>
            <tr>
                <td class="question_edx">I think about how I want to learn before I study.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-zp2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp2" value="5"></td>
            </tr>
            <tr>
                <td class="question_edx">I do not plan my approach to studying.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-zp3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-zp3" value="5"></td>
            </tr>
            <tr>
                <td class="question_edx">To identify gaps in my knowledge, I recap the most important topics without using my notes or other materials.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-kon1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon1" value="5"></td>
            </tr>
            <tr>
                <td class="question_edx">I ask myself questions relating to the subject matter to check that I have understood everything.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-kon2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon2" value="5"></td>
            </tr>
            <tr>
                <td class="question_edx">If there are any questions or tests in the course material, I use them to test myself.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-kon3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-kon3" value="5"></td>
            </tr>
            <tr>
                <td class="question_edx">I modify my studying technique when I encounter difficulties.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-reg1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg1" value="5"></td>
            </tr>
            <tr>
                <td class="question_edx">I change my study schedule when I realize that it is not feasible.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-reg2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg2" value="5"></td>
            </tr>
            <tr>
                <td class="question_edx">If I recognize that my approach to studying is not successful, I change it.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-reg3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-reg3" value="5"></td>
            </tr>
    </tbody>
</table></div>`;


    var MLSQ_Eff = ` 
<p class="survey_text">The following questions ask about your motivation for and attitudes about this course. <br/> Please rate each statement in terms of how much it applies to you. You can grade your answers from (1) &#34;not all all true of me&#34; to (7) &#34;very true of me&#34;.</p>
   <div style="margin-top:0px;padding-top:0px;padding-bottom:10px;border-top: 1px solid rgba(6,86,131, .05);" class="label-text intro-table">
    <table id="msql_eff" cellpadding="0" cellspacing="0" border="0" style="border-collapse: separate !important;table-layout: fixed;width: 100%;" class="table table-striped radiogrid">
  <colgroup>
      <col style="width:30%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%"/>
  </colgroup>
    <thead>
        <tr>
                <th class="label_edx"><span style="display:none">MLSQ Eff + Anxiety</span> &nbsp;</th>
                <th class="label_edx" style="padding-left:0px !important;padding-right:0px !important; padding-top:0px !important;">Not at all true of me <br/>1</th>
                <th class="label_edx">2</th>
                <th class="label_edx">3</th>
                <th class="label_edx">4</th>
                <th class="label_edx">5</th>
                <th class="label_edx">6</th>
                <th class="label_edx" style="padding-right:0px !important; padding-top:0px !important;">Very true of me <br/>7</th>
                <th class="label_edx notAnswerTab" style="padding-right:0px !important; padding-top:0px !important;">No answer</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td class="question_edx">I believe I will receive an excellent grade in this course<!--class-->.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-efficacy1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy1" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy1" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy1" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-efficacy1" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I'm certain I can understand the most difficult material presented in the readings of this course.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-efficacy2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy2" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy2" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy2" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-efficacy2" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I'm confident I can understand the basic concepts taught in this course.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-efficacy3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy3" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy3" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy3" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-efficacy3" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I'm confident I can understand the most complex material presented by the instructor in this course.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-efficacy4" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy4" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy4" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy4" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy4" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy4" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy4" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-efficacy4" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I'm confident I can do an excellent job on the assignments and tests in this course.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-efficacy5" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy5" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy5" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy5" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy5" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy5" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy5" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-efficacy5" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I expect to do well in this course<!--class-->.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-efficacy6" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy6" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy6" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy6" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy6" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy6" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy6" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-efficacy6" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I'm certain I can master the skills being taught in this course<!--class-->.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-efficacy7" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy7" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy7" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy7" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy7" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy7" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy7" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-efficacy7" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">Considering the difficulty of this course, the teacher, and my skills, I think I will do well in this course<!--class-->.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-efficacy8" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy8" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy8" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy8" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy8" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy8" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-efficacy8" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-efficacy8" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I take a test I think about how poorly I am doing compared with other students.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety1" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I take a test I think about items on other parts of the test I can't answer.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety2" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I take tests I think of the consequences of failing.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety3" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx"> I have an uneasy, upset feeling when I take an exam.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety4" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I feel my heart beating fast when I take an exam.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety5" value="8"></td>
            </tr>
    </tbody>
</table></div>`;

    var MLSQ_Meta_Cognitiv = ` 
<p class="survey_text">The following questions ask about your learning strategies and study skills for this course.
Please rate each statement in terms of how much it applies to you. You can grade your answers from (1) &#34;not all all true of me&#34; to (7) &#34;very true of me&#34;.</p>
   <div style="padding-top:0px;padding-bottom:10px;border-top: 1px solid rgba(6,86,131, .05);" class="label-text intro-table">
    <table id="msql_meta" cellpadding="0" cellspacing="0" border="0" style="border-collapse: separate !important;table-layout: fixed;width: 100%;" class="table table-striped radiogrid">
  <colgroup>
      <col style="width:30%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col class="notAnswerTab" style="width:8.75%"/>
  </colgroup>
    <thead>
        <tr>
                <th class="label_edx"><span style="display:none;">MLSQ meta_cog cognitive mngmt</span> &nbsp;</th>
                <th class="label_edx" style="padding-left:0px !important;padding-right:0px !important; padding-top:0px !important;">Not at all true of me <br/>1</th>
                <th class="label_edx">2</th>
                <th class="label_edx">3</th>
                <th class="label_edx">4</th>
                <th class="label_edx">5</th>
                <th class="label_edx">6</th>
                <th class="label_edx" style="padding-right:0px !important; padding-top:0px !important;">Very true of me<br/>7</th>
                <th class="label_edx notAnswerTab" style="padding-right:0px !important; padding-top:0px !important;">No answer</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td class="question_edx">During course<!--class--> time I often miss important points because I'm thinking of other things.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog1" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog1" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog1" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog1" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When reading for this course, I make up questions to help focus my reading.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog2" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog2" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog2" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog2" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I become confused about something I'm reading for this course<!--class-->, I go back and try to figure it out.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog3" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog3" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog3" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog3" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">If course material are difficult to understand, I change the way I read the material.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog4" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog4" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog4" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog4" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog4" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog4" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog4" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog4" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">Before I study new course material thoroughly, I often skim it to see how it is organized.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog5" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog5" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog5" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog5" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog5" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog5" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog5" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog5" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I ask myself questions to make sure I understand the material I have been studying in this course<!--class-->.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog6" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog6" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog6" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog6" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog6" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog6" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog6" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog6" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I try to change the way I study in order to fit the course requirements and instructor's teaching style.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog7" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog7" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog7" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog7" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog7" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog7" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog7" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog7" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I often find that I have been reading for this course<!--class--> but don't know what it was all about.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog8" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog8" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog8" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog8" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog8" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog8" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog8" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog8" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I try to think through a topic and decide what I am supposed to learn from it rather than just reading it over when studying.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog9" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog9" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog9" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog9" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog9" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog9" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog9" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog9" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When studying for this course I try to determine which concepts I don't understand well.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog10" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog10" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog10" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog10" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog10" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog10" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog10" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog10" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I study for this course<!--class-->, I set goals for myself in order to direct my activities in each study period.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog11" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog11" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog11" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog11" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog11" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog11" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog11" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog11" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">If I get confused taking notes in <!--added this-->this course<!--class-->, I make sure I sort it out afterwards.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog12" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog12" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog12" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog12" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog12" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog12" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-meta_cog12" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-meta_cog12" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I usually study in a place where I can concentrate on my course work.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int1" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int1" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int1" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int1" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I make good use of my study time for this course.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int2" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int2" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int2" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int2" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I find it hard to stick to a study schedule.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int3" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int3" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int3" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int3" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I have a regular place set aside for studying.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int4" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int4" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int4" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int4" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int4" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int4" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int4" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int4" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I make sure I keep up with the weekly readings and assignments for this course.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int5" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int5" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int5" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int5" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int5" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int5" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int5" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int5" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I attend this course<!--class--> regularly.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int6" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int6" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int6" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int6" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int6" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int6" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int6" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int6" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I often find that I don't spend very much time on this course because of other activities.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int7" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int7" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int7" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int7" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int7" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int7" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int7" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int7" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I rarely find time to review my notes or readings before an exam.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int8" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int8" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int8" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int8" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int8" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int8" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int8" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int8" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I often feel so lazy or bored when I study for this course<!--class--> that I quit before I finish what I planned to do.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int9" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int9" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int9" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int9" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int9" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int9" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int9" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int9" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I work hard to do well in this course<!--class--> even if I don't like what we are doing.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int10" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int10" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int10" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int10" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int10" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int10" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int10" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int10" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When course work is difficult, I give up or only study the easy parts.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int11" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int11" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int11" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int11" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int11" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int11" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int11" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int11" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">Even when course materials are dull and uninteresting, I manage to keep working until I finish.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int12" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int12" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int12" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int12" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int12" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int12" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-mnmgt_int12" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-mnmgt_int12" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I study the readings for this course, I outline the material to help me organize my thoughts.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-cog1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog1" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog1" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog1" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-cog1" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I study for this course, I go through the readings and my course<!--class--> notes and try to find the most important ideas.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-cog2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog2" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog2" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog2" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-cog2" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I make simple charts, diagrams, or tables to help me organize course material.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-cog3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog3" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog3" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog3" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-cog3" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I study for this course, I go over my course<!--class--> notes and make an outline of important concepts.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-cog4" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog4" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog4" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog4" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog4" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog4" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog4" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-cog4" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I study for this course<!--class-->, I practice saying the material to myself over and over.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-cog5" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog5" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog5" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog5" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog5" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog5" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog5" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-cog5" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When studying for this course<!--class-->, I read my course<!--class--> notes and the course readings over and over again.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-cog6" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog6" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog6" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog6" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog6" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog6" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog6" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-cog6" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I memorize key words to remind me of important concepts in this course<!--class-->.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-cog7" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog7" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog7" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog7" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog7" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog7" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog7" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-cog7" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I make lists of important terms for this course and memorize the lists.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-cog8" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog8" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog8" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog8" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog8" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog8" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-cog8" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-cog8" value="8"></td>
            </tr>
    </tbody>
</table></div>`;


    var procrastination_table = ` 
<p class="survey_text">The following questions assess your habits and routines as a student. Please answer the following as they apply to yourself. You can grade your answers from (1) "Disagree" to (5) "Agree".</p>
  <p class="survey_text" style="margin-top:10px;display:none;">How much do you, yourself agree to the following statements?</p>
   <div style="margin-top:20px;padding-top:0px;padding-bottom:10px;border-top: 1px solid rgba(6,86,131, .05);" class="label-text intro-table">
    <table id="aps" cellpadding="0" cellspacing="0" border="0" style="border-collapse: separate !important;table-layout: fixed;width: 100%;" class="table table-striped radiogrid">
  <colgroup>
      <col style="width:30%;"/>
      <col style="width:11.66%;"/>
      <col style="width:11.66%;"/>
      <col style="width:11.66;"/>
      <col style="width:11.66%;"/>
      <col style="width:11.66%;"/>
      <col class="notAnswerTab" style="width:11.66;"/>
  </colgroup>
    <thead>
        <tr>
                <th class="label_edx"><span style="display:none;">APS-S</span> &nbsp;</th>
                <th class="label_edx" style="padding-left:0px !important;padding-right:0px !important; padding-top:0px !important;">Disagree<br/>1</th>
                <th class="label_edx">2</th>
                <th class="label_edx">3</th>
                <th class="label_edx">4</th>
                <th class="label_edx" style="padding-left:0px !important;padding-right:0px !important; padding-top:0px !important;">Agree<br/>5</th>
                <th class="label_edx notAnswerTab" style="border-collapse: separate !important;padding-right:0px !important; padding-top:0px !important;">No answer</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td class="question_edx">I put off projects until the last minute.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-proc1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc1" value="5"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-proc1" value="6"></td>
            </tr>
            <tr>
                <td class="question_edx">I know I should work on course work<!--schoolwork-->, but I just don't do it.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-proc2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc2" value="5"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-proc2" value="6"></td>
            </tr>
            <tr>
                <td class="question_edx">I get distracted by other, more fun, things when I am supposed to work on course work<!--schoolwork-->.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-proc3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc3" value="5"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-proc3" value="6"></td>
            </tr>
            <tr>
                <td class="question_edx">When given an assignment, I usually put it away and forget about it until it is almost due.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-proc4" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc4" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc4" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc4" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc4" value="5"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-proc4" value="6"></td>
            </tr>
            <tr>
                <td class="question_edx">I frequently find myself putting important deadlines off.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-proc5" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc5" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc5" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc5" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-proc5" value="5"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-proc5" value="6"></td>
            </tr>
    </tbody>
</table></div>`;


    var big5 = ` 
  <p class="survey_text" style="margin-top:10px;">To what extent do the following statements apply to you?</p>
   <div style="margin-top:20px;padding-top:0px;padding-bottom:10px;border-top: 1px solid rgba(6,86,131, .05);margin-bottom:0px !important;" class="label-text intro-table">
    <table id="bigfivetable" cellpadding="0" cellspacing="0" border="0" style="border-collapse: separate !important;table-layout: fixed;width: 100%;" class="table table-striped radiogrid">
  <colgroup>
      <col style="width:20%;"/>
      <col style="width:13.33%;"/>
      <col style="width:13.33%;"/>
      <col style="width:13.33;"/>
      <col style="width:13.33%;"/>
      <col style="width:13.33%;"/>
      <col class="notAnswerTab" style="width:13.33;"/>
  </colgroup>
    <thead>
        <tr>
                <th class="label_edx"><span style="display:none;">Big Five Inventory</span> &nbsp;</th>
                <th class="label_edx" style="padding-left:0px !important; padding-top:0px !important;">Does not apply at all<br/>1</th>
                <th class="label_edx" style="padding-left:0px !important; padding-top:0px !important;">Does not apply<br/>2</th>
                <th class="label_edx" style="padding-left:0px !important; padding-top:0px !important;">Neutral/So-so<br/>3</th>
                <th class="label_edx" style="padding-left:0px !important; padding-top:0px !important;">Does apply<br/>4</th>
                <th class="label_edx" style="padding-left:0px !important; padding-top:0px !important;">Does apply entirely<br/>5</th>
                <th class="label_edx notAnswerTab" style="padding-top:0px !important;">No answer</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td class="question_edx">I see myself as someone who tends to be lazy.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-big1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-big1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-big1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-big1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-big1" value="5"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-big1" value="6"></td>
            </tr>
            <tr>
                <td class="question_edx">I see myself as someone who does a thorough job.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-big2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-big2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-big2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-big2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-big2" value="5"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-big2" value="6"></td>
            </tr>

    </tbody>
</table></div>`;


    var anxiety_table = ` 
   <div style="padding-top:0px;padding-bottom:10px;border-top: 1px solid rgba(6,86,131, .05);" class="label-text intro-table">
    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: separate !important;table-layout: fixed;width: 100%;" class="table table-striped radiogrid">
  <colgroup>
      <col style="width:30%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col style="width:8.75%;"/>
      <col class="notAnswerTab" style="width:8.75%"/>
  </colgroup>
    <thead>
        <tr>
                <th class="label_edx">MLSQ Anxiety &nbsp;</th>
                <th class="label_edx" style="padding-left:0px !important;padding-right:0px !important; padding-top:0px !important;">Not at all true of me</th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx"></th>
                <th class="label_edx" style="padding-left:0px !important;padding-right:0px !important; padding-top:0px !important;">Very true of me</th>
                <th class="label_edx notAnswerTab" style="padding-right:0px !important; padding-top:0px !important;">No answer</th>
        </tr>
        <tr>
                <th>&nbsp;</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th class="notAnswerTab">&nbsp;</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td class="question_edx">When I take a test I think about how poorly I am doing compared with other students.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety1" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety1" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I take a test I think about items on other parts of the test I can't answer.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety2" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety2" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">When I take tests I think of the consequences of failing.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety3" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety3" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I have an uneasy, upset feeling when I take an exam.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety4" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety4" value="8"></td>
            </tr>
            <tr>
                <td class="question_edx">I feel my heart beating fast when I take an exam.</td>
                <td class="likert_edx"><div class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="1"></div></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="2"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="3"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="4"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="5"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="6"></td>
                <td class="likert_edx"><input type="radio" name="radio-register-scale-anxiety5" value="7"></td>
                <td class="likert_edx notAnswerTab"><input type="radio" name="radio-register-scale-anxiety5" value="8"></td>
            </tr>
    </tbody>
</table></div>`;

    //  $(".select-familiar_with_R").after(table_1);
    // LIST   $(".text-course_how_many_students_studying").before(table_2);

    $(".select-gender").insertBefore($(".select-study_programme"));
    $(".text-your_age").insertAfter($(".select-enhanced_gender"));

    /////  $(".select-list_lang").insertBefore(".select-part_time_student");
    $(".select-bachelor_level_statistics").hide();
    $(".select-master_level_statistics").hide();
    $(".select-familiar_with_R").hide();

    ///// $(".select-importance_DAEI").before(table_1);
    // $(".text-course_how_many_students_studying").before(table_3);
    $("#register-more_time_on_course").after('<span>%</span>');
    $("#register-course_how_many_students_studying").after('<span>%</span>');
    $(".label-optional").hide();
    //intro_text = '<p id="ask_survey">We kindly ask you to fill in the following questions with care. The questions will be recorded anonymously and serve to improve the course content and the learning platform. Responding to the questions has no influence on your grading. There are no right or wrong answers.</p>';

    intro_text = '<p id="ask_survey">With this course, we are conducting a study to improve systematically and data-based the quality of teaching. The aim is to increase learning success, reduce failure rates and to ensure that as many students as possible invest their time spent on learning wisely. In order to develop improvements that are as accurate as possible and tailored to the students, we kindly ask you to fill in the following questions covering individual characteristics relevant to learning. <br/>It takes about 8-10 minutes to complete the questions. The questions will be recorded anonymously and only serve as study purpose (i.e., improving the learning platform). Responding to the questions has no influence on your grading. There are no right or wrong answers. Of course, responding is voluntary and items can be marked with &quot;no answer&quot;.</p>';
    intro_learning_text = '<p id="ask_survey2">Please rate the following items based on your behavior in this class. Your rating should be on a 7-point scale where 1=not at all true of me to 7=very true of me.</p>';
    $('.select-enhanced_gender').after('<div id="gqq" style="margin-top:20px;"><h3>Questions on Learning Behavior</h3></div>');

    $('.select-part_time_student').parent().prepend('<div id="lbb"><h3 id="lb" style="margin-top:50px;margin-bottom:20px;">General Questions</h3></div>');
    $('#lbb').before(intro_text);

    grade_text = '<div id="gq" style="margin-top: 100px;" class="survey_text">Please rate the following two questions based on your grade goal for this semester. <br/>Choose the grade goal that best describes your expectation for this course&#39;s final exam.</div>';

    $('#gqq').after(grade_text);


    $('#gqq').after(big5);
    sortTable("bigfivetable");
    $('#gqq').after(procrastination_table);
    sortTable("aps");
    //$('#gqq').after(anxiety_table);
    //$('#gqq').after(MLSQ_cognitive);
    //$('#gqq').after(MLSQ_Mngmt_intern);
    $('#gqq').after(MLSQ_Meta_Cognitiv);
    sortTable("msql_meta");
    $('#gqq').after(MLSQ_Eff);
    sortTable("msql_eff");

    //intro_learning_text = '<p id="ask_survey2">In the following, we would like to learn more about how you study. You will find a list of the various studying activities here. Please indicate for each activity how often it occurs in your case.</p>';
    //$('#gqq').after(intro_learning_text);
    $(".checkbox-consent").insertAfter($(".text-more_time_on_course"));

    $('<div id="marker1"><p class="survey_text" id="inse1"></p><div>').insertAfter($("#gq"));
    var oneOrZero = (Math.random() >= 0.5) ? 1 : 0;
    if (oneOrZero == 0) {
        $(".select-scale_gradegoal1").insertAfter($("#inse1"));
        $(".select-scale_gradegoal2").insertAfter($(".select-scale_gradegoal1"));
    } else {
        $(".select-scale_gradegoal2").insertAfter($("#inse1"));
        $(".select-scale_gradegoal1").insertAfter($(".select-scale_gradegoal2"));
    }


    $("#register-name").val("Anonymous");
    $(".form-field").css("margin-top", "0px");
    $("#register :input").prop("disabled", true);
    $(".optional-fields").toggleClass();
    $(".form-field").css("padding-bottom", "27px");
    // $("label[for='register-email']").html('<span class="label-text">Email (@stud.uni-bamberg.de)</span>');
    // $("label[for='register-gender']").html('<span class="label-text"> Please indicate your gender.</span>');
    // $("label[for='register-study_programme']").html('<span class="label-text"> Please indicate your study program.</span>');
    $("#register-more_time_on_course,#register-course_how_many_students_studying,#register-your_age").prop("type", "number");
    $("#register-more_time_on_course,#register-course_how_many_students_studying").prop("min", 0);
    $("#register-more_time_on_course,#register-course_how_many_students_studying").prop("max", 100);
    $("#register-more_time_on_course,#register-course_how_many_students_studying").prop("maxlength", 3);

    $("#register-email").val("@stud.uni-bamberg.de");

    $('#register-more_time_on_course,#register-course_how_many_students_studying').on('keyup', function () {
        var _this = $(this);
        var my_min = parseInt(_this.attr('min')) || 0; // if min attribute is not defined, 1 is default
        var my_max = parseInt(_this.attr('max')) || 100; // if max attribute is not defined, 100 is default
        var my_val = parseInt(_this.val()) || (""); // if input char is not a number the value will be (min - 1) so first condition will be true
        if (my_val < my_min) _this.val("");
        if (my_val > my_max) _this.val(my_max);
        //      if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
    });


    $("#register-your_age").prop("min", 16);
    $("#register-your_age").prop("max", 99);
    $("#register-your_age").prop("maxlength", 2);


    $('#register-your_age').on('change', function () {
        var _this = $(this);
        var my_min = parseInt(_this.attr('min')) || 0; // if min attribute is not defined, 1 is default
        var my_max = parseInt(_this.attr('max')) || 99; // if max attribute is not defined, 100 is default
        var my_val = parseInt(_this.val()) || (""); // if input char is not a number the value will be (min - 1) so first condition will be true
        if (my_val < my_min) {
            _this.val("");
            alert("The minimum age is 16.");
        }
        if (my_val > my_max) {
            _this.val(my_max);
        }
        //      if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
    });


    //$("#register-course_how_many_students_studying").prop("type", "number");
    $("#register-consent").prop('checked', true);
    $('#register-consent').on('click', function (e) {
        var $checkbox = $(this);
        if (dialog_count == 0) {
            e.preventDefault();
            e.stopPropagation();
            ConfirmDialog('We really rely on your support for improving the EESYS courses. Providing us with insights into your learning behavior will help us big time.<br /> Do you wish to opt out?');
        }
    });
    if ($('#register-importance_DAEI').val() != "") $("input[name=radio-register-importance_DAE][value=" + $('#register-importance_DAEI').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-importance_DAEI]').change(function () {
        $('#register-importance_DAEI').val($(this).val());
    });

    if ($('#register-motivation_DAEI').val() != "") $("input[name=radio-register-motivation_DAEI][value=" + $('#register-motivation_DAEI').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-motivation_DAEI]').change(function () {
        $('#register-motivation_DAEI').val($(this).val());
    });

    if ($('#register-measure_around_you').val() != "") $("input[name=radio-register-measure_around_you][value=" + $('#register-measure_around_you').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-measure_around_you]').change(function () {
        $('#register-measure_around_you').val($(this).val());
    });

    if ($('#register-measure_self_set_goals').val() != "") $("input[name=radio-register-measure_self_set_goals][value=" + $('#register-measure_self_set_goals').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-measure_self_set_goals]').change(function () {
        $('#register-measure_self_set_goals').val($(this).val());
    });

    if ($('#register-procrastinate').val() != "") $("input[name=radio-register-procrastinate][value=" + $('#register-procrastinate').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-procrastinate]').change(function () {
        $('#register-procrastinate').val($(this).val());
    });

    if ($('#register-list_zp1').val() != "") $("input[name=radio-register-zp1][value=" + $('#register-list_zp1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-zp1]').change(function () {
        $('#register-list_zp1').val($(this).val());
    });

    if ($('#register-list_zp2').val() != "") $("input[name=radio-register-zp2][value=" + $('#register-list_zp2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-zp2]').change(function () {
        $('#register-list_zp2').val($(this).val());
    });

    if ($('#register-list_zp3').val() != "") $("input[name=radio-register-zp3][value=" + $('#register-list_zp3').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-zp3]').change(function () {
        $('#register-list_zp3').val($(this).val());
    });

    if ($('#register-list_kon1').val() != "") $("input[name=radio-register-kon1][value=" + $('#register-list_kon1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-kon1]').change(function () {
        $('#register-list_kon1').val($(this).val());
    });

    if ($('#register-list_kon2').val() != "") $("input[name=radio-register-kon2][value=" + $('#register-list_kon2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-kon2]').change(function () {
        $('#register-list_kon2').val($(this).val());
    });

    if ($('#register-list_kon3').val() != "") $("input[name=radio-register-kon3][value=" + $('#register-list_kon3').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-kon3]').change(function () {
        $('#register-list_kon3').val($(this).val());
    });

    if ($('#register-list_reg1').val() != "") $("input[name=radio-register-reg1][value=" + $('#register-list_reg1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-reg1]').change(function () {
        $('#register-list_reg1').val($(this).val());
    });

    if ($('#register-list_reg2').val() != "") $("input[name=radio-register-reg2][value=" + $('#register-list_reg2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-reg2]').change(function () {
        $('#register-list_reg2').val($(this).val());
    });

    if ($('#register-list_reg3').val() != "") $("input[name=radio-register-reg3][value=" + $('#register-list_reg3').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-reg3]').change(function () {
        $('#register-list_reg3').val($(this).val());
    });

    if ($('#register-scale_efficacy1').val() != "") $("input[name=[radio-register-scale-efficacy1][value=" + $('#register-scale_efficacy1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-efficacy1]').change(function () {
        $('#register-scale_efficacy1').val($(this).val());
    });

    if ($('#register-scale_efficacy2').val() != "") $("input[name=[radio-register-scale-efficacy2][value=" + $('#register-scale_efficacy2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-efficacy2]').change(function () {
        $('#register-scale_efficacy2').val($(this).val());
    });

    if ($('#register-scale_efficacy3').val() != "") $("input[name=[radio-register-scale-efficacy3][value=" + $('#register-scale_efficacy3').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-efficacy3]').change(function () {
        $('#register-scale_efficacy3').val($(this).val());
    });

    if ($('#register-scale_efficacy4').val() != "") $("input[name=[radio-register-scale-efficacy4][value=" + $('#register-scale_efficacy4').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-efficacy4]').change(function () {
        $('#register-scale_efficacy4').val($(this).val());
    });

    if ($('#register-scale_efficacy5').val() != "") $("input[name=[radio-register-scale-efficacy5][value=" + $('#register-scale_efficacy5').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-efficacy5]').change(function () {
        $('#register-scale_efficacy5').val($(this).val());
    });


    if ($('#register-scale_efficacy6').val() != "") $("input[name=[radio-register-scale-efficacy6][value=" + $('#register-scale_efficacy6').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-efficacy6]').change(function () {
        $('#register-scale_efficacy6').val($(this).val());
    });

    if ($('#register-scale_efficacy7').val() != "") $("input[name=[radio-register-scale-efficacy7][value=" + $('#register-scale_efficacy7').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-efficacy7]').change(function () {
        $('#register-scale_efficacy7').val($(this).val());
    });

    if ($('#register-scale_efficacy8').val() != "") $("input[name=[radio-register-scale-efficacy8][value=" + $('#register-scale_efficacy8').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-efficacy8]').change(function () {
        $('#register-scale_efficacy8').val($(this).val());
    });

    if ($('#register-scale_meta_cog1').val() != "") $("input[name=[radio-register-scale-meta_cog1][value=" + $('#register-scale_meta_cog1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog1]').change(function () {
        $('#register-scale_meta_cog1').val($(this).val());
    });

    if ($('#register-scale_meta_cog2').val() != "") $("input[name=[radio-register-scale-meta_cog2][value=" + $('#register-scale_meta_cog2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog2]').change(function () {
        $('#register-scale_meta_cog2').val($(this).val());
    });

    if ($('#register-scale_meta_cog3').val() != "") $("input[name=[radio-register-scale-meta_cog3][value=" + $('#register-scale_meta_cog3').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog3]').change(function () {
        $('#register-scale_meta_cog3').val($(this).val());
    });

    if ($('#register-scale_meta_cog4').val() != "") $("input[name=[radio-register-scale-meta_cog4][value=" + $('#register-scale_meta_cog4').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog4]').change(function () {
        $('#register-scale_meta_cog4').val($(this).val());
    });

    if ($('#register-scale_meta_cog5').val() != "") $("input[name=[radio-register-scale-meta_cog5][value=" + $('#register-scale_meta_cog5').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog5]').change(function () {
        $('#register-scale_meta_cog5').val($(this).val());
    });

    if ($('#register-scale_meta_cog6').val() != "") $("input[name=[radio-register-scale-meta_cog6][value=" + $('#register-scale_meta_cog6').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog6]').change(function () {
        $('#register-scale_meta_cog6').val($(this).val());
    });

    if ($('#register-scale_meta_cog7').val() != "") $("input[name=[radio-register-scale-meta_cog7][value=" + $('#register-scale_meta_cog7').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog7]').change(function () {
        $('#register-scale_meta_cog7').val($(this).val());
    });

    if ($('#register-scale_meta_cog8').val() != "") $("input[name=[radio-register-scale-meta_cog8][value=" + $('#register-scale_meta_cog8').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog8]').change(function () {
        $('#register-scale_meta_cog8').val($(this).val());
    });

    if ($('#register-scale_meta_cog9').val() != "") $("input[name=[radio-register-scale-meta_cog9][value=" + $('#register-scale_meta_cog9').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog9]').change(function () {
        $('#register-scale_meta_cog9').val($(this).val());
    });

    if ($('#register-scale_meta_cog10').val() != "") $("input[name=[radio-register-scale-meta_cog10][value=" + $('#register-scale_meta_cog10').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog10]').change(function () {
        $('#register-scale_meta_cog10').val($(this).val());
    });

    if ($('#register-scale_meta_cog11').val() != "") $("input[name=[radio-register-scale-meta_cog11][value=" + $('#register-scale_meta_cog11').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog11]').change(function () {
        $('#register-scale_meta_cog11').val($(this).val());
    });

    if ($('#register-scale_meta_cog12').val() != "") $("input[name=[radio-register-scale-meta_cog12][value=" + $('#register-scale_meta_cog12').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-meta_cog12]').change(function () {
        $('#register-scale_meta_cog12').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int1').val() != "") $("input[name=[radio-register-scale-mnmgt_int1][value=" + $('#register-scale_mnmgt_int1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int1]').change(function () {
        $('#register-scale_mnmgt_int1').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int2').val() != "") $("input[name=[radio-register-scale-mnmgt_int2][value=" + $('#register-scale_mnmgt_int2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int2]').change(function () {
        $('#register-scale_mnmgt_int2').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int3').val() != "") $("input[name=[radio-register-scale-mnmgt_int3][value=" + $('#register-scale_mnmgt_int3').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int3]').change(function () {
        $('#register-scale_mnmgt_int3').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int4').val() != "") $("input[name=[radio-register-scale-mnmgt_int4][value=" + $('#register-scale_mnmgt_int4').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int4]').change(function () {
        $('#register-scale_mnmgt_int4').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int5').val() != "") $("input[name=[radio-register-scale-mnmgt_int5][value=" + $('#register-scale_mnmgt_int5').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int5]').change(function () {
        $('#register-scale_mnmgt_int5').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int6').val() != "") $("input[name=[radio-register-scale-mnmgt_int6][value=" + $('#register-scale_mnmgt_int6').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int6]').change(function () {
        $('#register-scale_mnmgt_int6').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int7').val() != "") $("input[name=[radio-register-scale-mnmgt_int7][value=" + $('#register-scale_mnmgt_int7').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int7]').change(function () {
        $('#register-scale_mnmgt_int7').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int8').val() != "") $("input[name=[radio-register-scale-mnmgt_int8][value=" + $('#register-scale_mnmgt_int8').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int8]').change(function () {
        $('#register-scale_mnmgt_int8').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int9').val() != "") $("input[name=[radio-register-scale-mnmgt_int9][value=" + $('#register-scale_mnmgt_int9').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int9]').change(function () {
        $('#register-scale_mnmgt_int9').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int10').val() != "") $("input[name=[radio-register-scale-mnmgt_int10][value=" + $('#register-scale_mnmgt_int10').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int10]').change(function () {
        $('#register-scale_mnmgt_int10').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int11').val() != "") $("input[name=[radio-register-scale-mnmgt_int11][value=" + $('#register-scale_mnmgt_int11').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int11]').change(function () {
        $('#register-scale_mnmgt_int11').val($(this).val());
    });

    if ($('#register-scale_mnmgt_int12').val() != "") $("input[name=[radio-register-scale-mnmgt_int12][value=" + $('#register-scale_mnmgt_int12').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-mnmgt_int12]').change(function () {
        $('#register-scale_mnmgt_int12').val($(this).val());
    });

    if ($('#register-scale_cog1').val() != "") $("input[name=[radio-register-scale-cog1][value=" + $('#register-scale_cog1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-cog1]').change(function () {
        $('#register-scale_cog1').val($(this).val());
    });

    if ($('#register-scale_cog2').val() != "") $("input[name=[radio-register-scale-cog2][value=" + $('#register-scale_cog2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-cog2]').change(function () {
        $('#register-scale_cog2').val($(this).val());
    });

    if ($('#register-scale_cog3').val() != "") $("input[name=[radio-register-scale-cog3][value=" + $('#register-scale_cog3').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-cog3]').change(function () {
        $('#register-scale_cog3').val($(this).val());
    });

    if ($('#register-scale_cog4').val() != "") $("input[name=[radio-register-scale-cog4][value=" + $('#register-scale_cog4').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-cog4]').change(function () {
        $('#register-scale_cog4').val($(this).val());
    });

    if ($('#register-scale_cog5').val() != "") $("input[name=[radio-register-scale-cog5][value=" + $('#register-scale_cog5').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-cog5]').change(function () {
        $('#register-scale_cog5').val($(this).val());
    });

    if ($('#register-scale_cog6').val() != "") $("input[name=[radio-register-scale-cog6][value=" + $('#register-scale_cog6').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-cog6]').change(function () {
        $('#register-scale_cog6').val($(this).val());
    });

    if ($('#register-scale_cog7').val() != "") $("input[name=[radio-register-scale-cog7][value=" + $('#register-scale_cog7').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-cog7]').change(function () {
        $('#register-scale_cog7').val($(this).val());
    });

    if ($('#register-scale_cog8').val() != "") $("input[name=[radio-register-scale-cog8][value=" + $('#register-scale_cog8').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-cog8]').change(function () {
        $('#register-scale_cog8').val($(this).val());
    });


    if ($('#register-scale_proc1').val() != "") $("input[name=[radio-register-scale-proc1][value=" + $('#register-scale_proc1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-proc1]').change(function () {
        $('#register-scale_proc1').val($(this).val());
    });

    if ($('#register-scale_proc2').val() != "") $("input[name=[radio-register-scale-proc2][value=" + $('#register-scale_proc2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-proc2]').change(function () {
        $('#register-scale_proc2').val($(this).val());
    });

    if ($('#register-scale_proc3').val() != "") $("input[name=[radio-register-scale-proc3][value=" + $('#register-scale_proc3').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-proc3]').change(function () {
        $('#register-scale_proc3').val($(this).val());
    });

    if ($('#register-scale_proc4').val() != "") $("input[name=[radio-register-scale-proc4][value=" + $('#register-scale_proc4').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-proc4]').change(function () {
        $('#register-scale_proc4').val($(this).val());
    });

    if ($('#register-scale_proc5').val() != "") $("input[name=[radio-register-scale-proc5][value=" + $('#register-scale_proc5').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-proc5]').change(function () {
        $('#register-scale_proc5').val($(this).val());
    });


    if ($('#register-scale_big5_1').val() != "") $("input[name=[radio-register-scale-big1][value=" + $('#register-scale_big5_1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-big1]').change(function () {
        $('#register-scale_big5_1').val($(this).val());
    });

    if ($('#register-scale_big5_2').val() != "") $("input[name=[radio-register-scale-big2][value=" + $('#register-scale_big5_2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-big2]').change(function () {
        $('#register-scale_big5_2').val($(this).val());
    });


    if ($('#register-scale_anxiety1').val() != "") $("input[name=[radio-register-scale-anxiety1][value=" + $('#register-scale_anxiety1').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-anxiety1]').change(function () {
        $('#register-scale_anxiety1').val($(this).val());
    });

    if ($('#register-scale_anxiety2').val() != "") $("input[name=[radio-register-scale-anxiety2][value=" + $('#register-scale_anxiety2').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-anxiety2]').change(function () {
        $('#register-scale_anxiety2').val($(this).val());
    });

    if ($('#register-scale_anxiety3').val() != "") $("input[name=[radio-register-scale-anxiety3][value=" + $('#register-scale_anxiety3').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-anxiety3]').change(function () {
        $('#register-scale_anxiety3').val($(this).val());
    });

    if ($('#register-scale_anxiety4').val() != "") $("input[name=[radio-register-scale-anxiety4][value=" + $('#register-scale_anxiety4').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-anxiety4]').change(function () {
        $('#register-scale_anxiety4').val($(this).val());
    });

    if ($('#register-scale_anxiety5').val() != "") $("input[name=[radio-register-scale-anxiety5][value=" + $('#register-scale_anxiety5').val() + "]").attr('checked', 'checked');
    $('input:radio[name=radio-register-scale-anxiety5]').change(function () {
        $('#register-scale_anxiety5').val($(this).val());
    });

    $('.login-register').addClass('resize-form-half');
    $('.form-type').addClass('resize-form-half');
    $('#pp_consent').addClass('resize-form-half');
    $('.toggle-form').addClass('resize-form-full');


    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function (mutations, observer) {
        // fired when a mutation occurs
        var listItems = $(".message-copy li");
        for (let li of listItems) {
            if ($(li).text().includes("&#x27;")) {
                var new_text = $(li).text().replace("&#x27;", "'");
                $(li).text(new_text);
            }
            if ($(li).text().includes("Unauthorized email address.")) {
                $(li).text("Unauthorized email address: Please use your @stud.uni-bamberg.de mail.");
            }
        }
    });


    // define what element should be observed by the observer
    // and what types of mutations trigger the callback
    observer.observe(document, {
        subtree: true,
        attributes: true
        //...
    });

}