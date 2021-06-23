
hosted = "https://aolmo.github.io/assets/web/exps/inclusive-gan-mturk/run2/{0}.jpg"

header = '<link href="https://s3.amazonaws.com/mturk-public/bs30/css/bootstrap.min.css" rel="stylesheet" />\
<section class="container" id="Other" style="margin-bottom:15px; padding: 10px 10px; font-family: Verdana, Geneva, sans-serif; color:#333333; font-size:0.9em;">\
<div class="row col-xs-12 col-md-12"><!-- Instructions -->\
<div class="panel panel-primary">\
<div class="panel-heading"><strong>Instructions</strong></div>\
<div class="panel-body">\
<p>As a part of this HIT, you will be asked to answer questions about 52 images. For each image, select the most appropriate option.</p>\
<p>This study is part of a research effort. We request you to answer the questions sincerely.</p>\
<p>** YOU MUST ANSWER ALL QUESTIONS TO GET YOUR HIT APPROVED (TO RECEIVE PAYMENT). **</p>\
</div>\
</div>\
<!-- End Instructions --><!-- Content Body -->\
<section>\n\n'

item_holder = '<div><img height="145" width="145" src="'+hosted+'"/></div>\
        <fieldset><label>Q1</label>\
<div class="radio"><input name="gender_{0}" type="radio" value="F" />Face has mostly feminine features</div>\
<div class="radio"><input name="gender_{0}" type="radio" value="M" />Face has mostly masculine features</div>\
<div class="radio"><input name="gender_{0}" type="radio" value="N" />Neither of the above</div>\
</fieldset>\n\n\
<fieldset><label>Q2</label>\
<div class="radio"><input name="color_{0}" type="radio" value="NW" />Skin color is non-white</div>\
<div class="radio"><input name="color_{0}" type="radio" value="W" />Skin color is white</div>\
<div class="radio"><input name="color_{0}" type="radio" value="CT" />Cannot tell</div>\
</fieldset>\
<hr>\n<hr>\n'
footer = '</section>\
<!-- End Content Body --></div>\
</section>\
<style type="text/css">fieldset { padding: 10px; background:#fbfbfb; border-radius:5px; margin-bottom:5px; }\
</style>\n'

# Generate page
page = header

for image_num in range(50):
    if image_num == 22:
        page += item_holder.format("idris")
    elif image_num == 45:
        page += item_holder.format("scarlett")
    page += item_holder.format(image_num)
page += footer
print(page)
