<x-mail::message>
# お問い合わせ内容

以下の内容でお問い合わせがありました。

- お名前: {{ $data['name'] }}
- メールアドレス: {{ $data['email'] }}
- お問い合わせ内容: {{ $data['comment'] }}


</x-mail::message>
