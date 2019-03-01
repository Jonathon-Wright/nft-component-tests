<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="2.3">
  <hashTree>
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="app.integration1.volo2.com:443" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">A SSLv3-compatible ClientHello handshake was found. Fiddler extracted the parameters below.

Version: 3.3 (TLS/1.2)
Random: 5C 58 11 74 AF D2 44 0D 01 E2 54 8D AD 80 76 8D B7 C2 8B FC 00 55 F0 91 71 EF F6 3D 34 44 80 0B
"Time": 16/09/2031 03:56:28
SessionID: empty
Extensions: 
	server_name	app.integration1.volo2.com
	status_request	OCSP - Implicit Responder
	elliptic_curves	unknown [0x1D), secp256r1 [0x17], secp384r1 [0x18]
	ec_point_formats	uncompressed [0x0]
	signature_algs	sha256_rsa, sha384_rsa, sha1_rsa, sha256_ecdsa, sha384_ecdsa, sha1_ecdsa, sha1_dsa, sha512_rsa, sha512_ecdsa
	SessionTicket	empty
	ALPN		h2, http/1.1
	extended_master_secret	empty
	0x0018		00 10 03 02 01 00
	renegotiation_info	00
Ciphers: 
	[C02C]	TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
	[C02B]	TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
	[C030]	TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
	[C02F]	TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
	[C024]	TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
	[C023]	TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
	[C028]	TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
	[C027]	TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	[C00A]	TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
	[C009]	TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
	[C014]	TLS1_CK_ECDHE_RSA_WITH_AES_256_CBC_SHA
	[C013]	TLS1_CK_ECDHE_RSA_WITH_AES_128_CBC_SHA
	[009D]	TLS_RSA_WITH_AES_256_GCM_SHA384
	[009C]	TLS_RSA_WITH_AES_128_GCM_SHA256
	[003D]	TLS_RSA_WITH_AES_256_CBC_SHA256
	[003C]	TLS_RSA_WITH_AES_128_CBC_SHA256
	[0035]	TLS_RSA_AES_256_SHA
	[002F]	TLS_RSA_AES_128_SHA
	[000A]	SSL_RSA_WITH_3DES_EDE_SHA

Compression: 
	[00]	NO_COMPRESSION


</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port">443</stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">app.integration1.volo2.com:443</stringProp>
      <stringProp name="HTTPSampler.method">CONNECT</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/4303/" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/4303/</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="auth.integration1.volo2.com:443" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">A SSLv3-compatible ClientHello handshake was found. Fiddler extracted the parameters below.

Version: 3.3 (TLS/1.2)
Random: 5C 58 11 75 AD 6B 48 67 A5 58 2F 67 5F 8D 09 74 A2 39 4C 84 FE 9A FE E8 2C B0 C8 FD 05 D2 BD 69
"Time": 28/03/2032 08:16:44
SessionID: empty
Extensions: 
	server_name	auth.integration1.volo2.com
	status_request	OCSP - Implicit Responder
	elliptic_curves	unknown [0x1D), secp256r1 [0x17], secp384r1 [0x18]
	ec_point_formats	uncompressed [0x0]
	signature_algs	sha256_rsa, sha384_rsa, sha1_rsa, sha256_ecdsa, sha384_ecdsa, sha1_ecdsa, sha1_dsa, sha512_rsa, sha512_ecdsa
	SessionTicket	empty
	ALPN		h2, http/1.1
	extended_master_secret	empty
	0x0018		00 10 03 02 01 00
	renegotiation_info	00
Ciphers: 
	[C02C]	TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
	[C02B]	TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
	[C030]	TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
	[C02F]	TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
	[C024]	TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
	[C023]	TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
	[C028]	TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
	[C027]	TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	[C00A]	TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
	[C009]	TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
	[C014]	TLS1_CK_ECDHE_RSA_WITH_AES_256_CBC_SHA
	[C013]	TLS1_CK_ECDHE_RSA_WITH_AES_128_CBC_SHA
	[009D]	TLS_RSA_WITH_AES_256_GCM_SHA384
	[009C]	TLS_RSA_WITH_AES_128_GCM_SHA256
	[003D]	TLS_RSA_WITH_AES_256_CBC_SHA256
	[003C]	TLS_RSA_WITH_AES_128_CBC_SHA256
	[0035]	TLS_RSA_AES_256_SHA
	[002F]	TLS_RSA_AES_128_SHA
	[000A]	SSL_RSA_WITH_3DES_EDE_SHA

Compression: 
	[00]	NO_COMPRESSION


</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port">443</stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">auth.integration1.volo2.com:443</stringProp>
      <stringProp name="HTTPSampler.method">CONNECT</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="fonts.gstatic.com:443" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">A SSLv3-compatible ClientHello handshake was found. Fiddler extracted the parameters below.

Version: 3.3 (TLS/1.2)
Random: 5C 58 11 74 51 E3 20 EC E0 13 DB C0 4E C3 1A 3A 7C DD 55 0C E8 1E 6E B3 B1 6F 15 29 FE FF 01 55
"Time": 16/09/2031 03:56:28
SessionID: empty
Extensions: 
	server_name	fonts.gstatic.com
	status_request	OCSP - Implicit Responder
	elliptic_curves	unknown [0x1D), secp256r1 [0x17], secp384r1 [0x18]
	ec_point_formats	uncompressed [0x0]
	signature_algs	sha256_rsa, sha384_rsa, sha1_rsa, sha256_ecdsa, sha384_ecdsa, sha1_ecdsa, sha1_dsa, sha512_rsa, sha512_ecdsa
	SessionTicket	empty
	ALPN		h2, http/1.1
	extended_master_secret	empty
	0x0018		00 10 03 02 01 00
	renegotiation_info	00
Ciphers: 
	[C02C]	TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
	[C02B]	TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
	[C030]	TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
	[C02F]	TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
	[C024]	TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
	[C023]	TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
	[C028]	TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
	[C027]	TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	[C00A]	TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
	[C009]	TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
	[C014]	TLS1_CK_ECDHE_RSA_WITH_AES_256_CBC_SHA
	[C013]	TLS1_CK_ECDHE_RSA_WITH_AES_128_CBC_SHA
	[009D]	TLS_RSA_WITH_AES_256_GCM_SHA384
	[009C]	TLS_RSA_WITH_AES_128_GCM_SHA256
	[003D]	TLS_RSA_WITH_AES_256_CBC_SHA256
	[003C]	TLS_RSA_WITH_AES_128_CBC_SHA256
	[0035]	TLS_RSA_AES_256_SHA
	[002F]	TLS_RSA_AES_128_SHA
	[000A]	SSL_RSA_WITH_3DES_EDE_SHA

Compression: 
	[00]	NO_COMPRESSION


</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">fonts.gstatic.com</stringProp>
      <stringProp name="HTTPSampler.port">443</stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">fonts.gstatic.com:443</stringProp>
      <stringProp name="HTTPSampler.method">CONNECT</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0b.woff2" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">fonts.gstatic.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0b.woff2</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=92eb0bf3-eb5a-4bd8-a278-0ae4d9bbc932&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=943342ed-2fd4-4764-b3ab-470d0f36c8ec&amp;prompt=none" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=92eb0bf3-eb5a-4bd8-a278-0ae4d9bbc932&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=943342ed-2fd4-4764-b3ab-470d0f36c8ec&amp;prompt=none</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=eb0e2464-fdf1-45d7-81e3-4350969444fd&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=51477299-d55a-431f-825c-9491cd4f8457" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=eb0e2464-fdf1-45d7-81e3-4350969444fd&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=51477299-d55a-431f-825c-9491cd4f8457</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="auth.integration1.volo2.com:443" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">A SSLv3-compatible ClientHello handshake was found. Fiddler extracted the parameters below.

Version: 3.3 (TLS/1.2)
Random: 5C 58 11 75 88 6D 67 4D C1 4D 22 B1 94 D8 ED 95 39 96 3C B8 79 C8 E3 36 BB 79 AC 60 B6 C6 7A 5A
"Time": 28/03/2032 08:16:44
SessionID: 79 07 00 00 B6 95 9A 61 0F B6 76 D1 8A 94 F2 16 6A 2B EF 83 E8 24 19 93 99 19 74 5E CD 3A 92 BC
Extensions: 
	server_name	auth.integration1.volo2.com
	status_request	OCSP - Implicit Responder
	elliptic_curves	unknown [0x1D), secp256r1 [0x17], secp384r1 [0x18]
	ec_point_formats	uncompressed [0x0]
	signature_algs	sha256_rsa, sha384_rsa, sha1_rsa, sha256_ecdsa, sha384_ecdsa, sha1_ecdsa, sha1_dsa, sha512_rsa, sha512_ecdsa
	SessionTicket	empty
	ALPN		h2, http/1.1
	extended_master_secret	empty
	0x0018		00 10 03 02 01 00
	renegotiation_info	00
Ciphers: 
	[C02C]	TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
	[C02B]	TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
	[C030]	TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
	[C02F]	TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
	[C024]	TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
	[C023]	TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
	[C028]	TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
	[C027]	TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	[C00A]	TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
	[C009]	TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
	[C014]	TLS1_CK_ECDHE_RSA_WITH_AES_256_CBC_SHA
	[C013]	TLS1_CK_ECDHE_RSA_WITH_AES_128_CBC_SHA
	[009D]	TLS_RSA_WITH_AES_256_GCM_SHA384
	[009C]	TLS_RSA_WITH_AES_128_GCM_SHA256
	[003D]	TLS_RSA_WITH_AES_256_CBC_SHA256
	[003C]	TLS_RSA_WITH_AES_128_CBC_SHA256
	[0035]	TLS_RSA_AES_256_SHA
	[002F]	TLS_RSA_AES_128_SHA
	[000A]	SSL_RSA_WITH_3DES_EDE_SHA

Compression: 
	[00]	NO_COMPRESSION


</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port">443</stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">auth.integration1.volo2.com:443</stringProp>
      <stringProp name="HTTPSampler.method">CONNECT</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=46648c54-ed9a-4d0c-8255-b6d150c94dc0&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=65ad6000-3592-4c85-8b18-1a27fa235125" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=46648c54-ed9a-4d0c-8255-b6d150c94dc0&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=65ad6000-3592-4c85-8b18-1a27fa235125</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/login-actions/authenticate?session_code=7QkFR-0pSdLPMEZgn0wurI_J9-VQHV5uUq7ohQCh8g4&amp;execution=6887a1fa-0892-4f02-928f-bb2cf1771a52&amp;client_id=web&amp;tab_id=2G5_BBsgQL8" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">username=pravin&amp;password=pravin</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/login-actions/authenticate?session_code=7QkFR-0pSdLPMEZgn0wurI_J9-VQHV5uUq7ohQCh8g4&amp;execution=6887a1fa-0892-4f02-928f-bb2cf1771a52&amp;client_id=web&amp;tab_id=2G5_BBsgQL8</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/login-actions/authenticate?client_id=web&amp;tab_id=W_A9_4WcddQ" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/login-actions/authenticate?client_id=web&amp;tab_id=W_A9_4WcddQ</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/resources/4.4.0.final/login/volo/node_modules/patternfly/dist/fonts/PatternFlyIcons-webfont.ttf" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/resources/4.4.0.final/login/volo/node_modules/patternfly/dist/fonts/PatternFlyIcons-webfont.ttf</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/login-actions/authenticate?session_code=tmeipZGdsvH5zOsVVHqpD2C_qM5Tyk-kPuQ9l1bLrAQ&amp;execution=6887a1fa-0892-4f02-928f-bb2cf1771a52&amp;client_id=web&amp;tab_id=W_A9_4WcddQ" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">username=pravin&amp;password=pravin</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/login-actions/authenticate?session_code=tmeipZGdsvH5zOsVVHqpD2C_qM5Tyk-kPuQ9l1bLrAQ&amp;execution=6887a1fa-0892-4f02-928f-bb2cf1771a52&amp;client_id=web&amp;tab_id=W_A9_4WcddQ</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/4303/" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/4303/</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/protocol/openid-connect/token" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">code=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..DCmjkt9t8XCacWv4uGCMjg.tbHd7ZrVyczjJrDrnFRosUgeDGYwpF5VW6hTJF29Odptx0sAVeumK8vbtUKbOTZseZLtzrpBpFq6GU790XVTWJSvnwD0vsfe-R7J9B4jQso0NuXcUipXL8n5ksVu5PEQj7__oSG88vL9JUsFY_PyHivsx5UqLpU7c_7-aSxoPmZn6TjSt0bCAxpGJLoCno0ti-jFZy6lBZDUxItCq16N8ylJ578ptMBwXxoJaBFh1kniekuLL_ICptuuIg7vTuvO.CbycOThqAtD37D4OY8C5tQ&amp;grant_type=authorization_code&amp;client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/protocol/openid-connect/token</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/5.3393ec720dbb26492b56.css" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/5.3393ec720dbb26492b56.css</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="app.integration1.volo2.com:443" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">A SSLv3-compatible ClientHello handshake was found. Fiddler extracted the parameters below.

Version: 3.3 (TLS/1.2)
Random: 5C 58 11 99 4A 02 48 22 7C F8 1D F6 D3 B6 62 CF 19 D7 3E 7D D5 8A B8 4D FB F2 B7 97 67 98 76 91
"Time": 18/05/2051 20:26:20
SessionID: A3 29 00 00 CC BC BA 0B 85 BD 87 59 50 8C 8F CE 1B E6 14 3D 2E 8B DA BF 60 EF 79 BF 1A 9B F1 40
Extensions: 
	server_name	app.integration1.volo2.com
	status_request	OCSP - Implicit Responder
	elliptic_curves	unknown [0x1D), secp256r1 [0x17], secp384r1 [0x18]
	ec_point_formats	uncompressed [0x0]
	signature_algs	sha256_rsa, sha384_rsa, sha1_rsa, sha256_ecdsa, sha384_ecdsa, sha1_ecdsa, sha1_dsa, sha512_rsa, sha512_ecdsa
	SessionTicket	empty
	ALPN		h2, http/1.1
	extended_master_secret	empty
	0x0018		00 10 03 02 01 00
	renegotiation_info	00
Ciphers: 
	[C02C]	TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
	[C02B]	TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
	[C030]	TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
	[C02F]	TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
	[C024]	TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
	[C023]	TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
	[C028]	TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
	[C027]	TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	[C00A]	TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
	[C009]	TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
	[C014]	TLS1_CK_ECDHE_RSA_WITH_AES_256_CBC_SHA
	[C013]	TLS1_CK_ECDHE_RSA_WITH_AES_128_CBC_SHA
	[009D]	TLS_RSA_WITH_AES_256_GCM_SHA384
	[009C]	TLS_RSA_WITH_AES_128_GCM_SHA256
	[003D]	TLS_RSA_WITH_AES_256_CBC_SHA256
	[003C]	TLS_RSA_WITH_AES_128_CBC_SHA256
	[0035]	TLS_RSA_AES_256_SHA
	[002F]	TLS_RSA_AES_128_SHA
	[000A]	SSL_RSA_WITH_3DES_EDE_SHA

Compression: 
	[00]	NO_COMPRESSION


</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port">443</stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">app.integration1.volo2.com:443</stringProp>
      <stringProp name="HTTPSampler.method">CONNECT</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/5.51660e8a62f90a467869.js" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/5.51660e8a62f90a467869.js</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":null,"variables":{},"query":"{\n  GetErrors {\n    count\n    __typename\n  }\n  GetUnrefinedCount {\n    count\n    __typename\n  }\n  GetUnpublishedCount {\n    count\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/static/redHorizontalArrow.0da28187.svg" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/static/redHorizontalArrow.0da28187.svg</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":null,"variables":{},"query":"{\n  GetUnpublishedCount {\n    count\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/0.fbd7291af0f90b893155.css" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/0.fbd7291af0f90b893155.css</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/0.4bc9d3974c3c77c05329.js" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/0.4bc9d3974c3c77c05329.js</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="app.integration1.volo2.com:443" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">A SSLv3-compatible ClientHello handshake was found. Fiddler extracted the parameters below.

Version: 3.3 (TLS/1.2)
Random: 5C 58 11 9D CE 44 C1 6B 45 22 B1 1A 47 3F 23 05 32 51 7C E5 70 F2 70 29 EF AE 92 FA 39 91 CF 48
"Time": 03/07/2053 13:47:24
SessionID: A3 29 00 00 CC BC BA 0B 85 BD 87 59 50 8C 8F CE 1B E6 14 3D 2E 8B DA BF 60 EF 79 BF 1A 9B F1 40
Extensions: 
	server_name	app.integration1.volo2.com
	status_request	OCSP - Implicit Responder
	elliptic_curves	unknown [0x1D), secp256r1 [0x17], secp384r1 [0x18]
	ec_point_formats	uncompressed [0x0]
	signature_algs	sha256_rsa, sha384_rsa, sha1_rsa, sha256_ecdsa, sha384_ecdsa, sha1_ecdsa, sha1_dsa, sha512_rsa, sha512_ecdsa
	SessionTicket	empty
	ALPN		h2, http/1.1
	extended_master_secret	empty
	0x0018		00 10 03 02 01 00
	renegotiation_info	00
Ciphers: 
	[C02C]	TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
	[C02B]	TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
	[C030]	TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
	[C02F]	TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
	[C024]	TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
	[C023]	TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
	[C028]	TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
	[C027]	TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	[C00A]	TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
	[C009]	TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
	[C014]	TLS1_CK_ECDHE_RSA_WITH_AES_256_CBC_SHA
	[C013]	TLS1_CK_ECDHE_RSA_WITH_AES_128_CBC_SHA
	[009D]	TLS_RSA_WITH_AES_256_GCM_SHA384
	[009C]	TLS_RSA_WITH_AES_128_GCM_SHA256
	[003D]	TLS_RSA_WITH_AES_256_CBC_SHA256
	[003C]	TLS_RSA_WITH_AES_128_CBC_SHA256
	[0035]	TLS_RSA_AES_256_SHA
	[002F]	TLS_RSA_AES_128_SHA
	[000A]	SSL_RSA_WITH_3DES_EDE_SHA

Compression: 
	[00]	NO_COMPRESSION


</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port">443</stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">app.integration1.volo2.com:443</stringProp>
      <stringProp name="HTTPSampler.method">CONNECT</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="app.integration1.volo2.com:443" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">A SSLv3-compatible ClientHello handshake was found. Fiddler extracted the parameters below.

Version: 3.3 (TLS/1.2)
Random: 5C 58 11 9D 38 2F B2 99 FC 7A 3A CE 39 2A A9 C0 93 1F 9F 32 E1 F3 61 AC 92 56 8A D2 3F DB 2B 25
"Time": 03/07/2053 13:47:24
SessionID: A3 29 00 00 CC BC BA 0B 85 BD 87 59 50 8C 8F CE 1B E6 14 3D 2E 8B DA BF 60 EF 79 BF 1A 9B F1 40
Extensions: 
	server_name	app.integration1.volo2.com
	status_request	OCSP - Implicit Responder
	elliptic_curves	unknown [0x1D), secp256r1 [0x17], secp384r1 [0x18]
	ec_point_formats	uncompressed [0x0]
	signature_algs	sha256_rsa, sha384_rsa, sha1_rsa, sha256_ecdsa, sha384_ecdsa, sha1_ecdsa, sha1_dsa, sha512_rsa, sha512_ecdsa
	SessionTicket	empty
	ALPN		h2, http/1.1
	extended_master_secret	empty
	0x0018		00 10 03 02 01 00
	renegotiation_info	00
Ciphers: 
	[C02C]	TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
	[C02B]	TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
	[C030]	TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
	[C02F]	TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
	[C024]	TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
	[C023]	TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
	[C028]	TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
	[C027]	TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	[C00A]	TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
	[C009]	TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
	[C014]	TLS1_CK_ECDHE_RSA_WITH_AES_256_CBC_SHA
	[C013]	TLS1_CK_ECDHE_RSA_WITH_AES_128_CBC_SHA
	[009D]	TLS_RSA_WITH_AES_256_GCM_SHA384
	[009C]	TLS_RSA_WITH_AES_128_GCM_SHA256
	[003D]	TLS_RSA_WITH_AES_256_CBC_SHA256
	[003C]	TLS_RSA_WITH_AES_128_CBC_SHA256
	[0035]	TLS_RSA_AES_256_SHA
	[002F]	TLS_RSA_AES_128_SHA
	[000A]	SSL_RSA_WITH_3DES_EDE_SHA

Compression: 
	[00]	NO_COMPRESSION


</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port">443</stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">app.integration1.volo2.com:443</stringProp>
      <stringProp name="HTTPSampler.method">CONNECT</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="app.integration1.volo2.com:443" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">A SSLv3-compatible ClientHello handshake was found. Fiddler extracted the parameters below.

Version: 3.3 (TLS/1.2)
Random: 5C 58 11 9D 38 D7 63 41 4E FA 87 DC 3F A1 0D FF 15 D2 A7 94 5F 19 38 75 B7 7F A3 A7 38 CD E7 26
"Time": 03/07/2053 13:47:24
SessionID: A3 29 00 00 CC BC BA 0B 85 BD 87 59 50 8C 8F CE 1B E6 14 3D 2E 8B DA BF 60 EF 79 BF 1A 9B F1 40
Extensions: 
	server_name	app.integration1.volo2.com
	status_request	OCSP - Implicit Responder
	elliptic_curves	unknown [0x1D), secp256r1 [0x17], secp384r1 [0x18]
	ec_point_formats	uncompressed [0x0]
	signature_algs	sha256_rsa, sha384_rsa, sha1_rsa, sha256_ecdsa, sha384_ecdsa, sha1_ecdsa, sha1_dsa, sha512_rsa, sha512_ecdsa
	SessionTicket	empty
	ALPN		h2, http/1.1
	extended_master_secret	empty
	0x0018		00 10 03 02 01 00
	renegotiation_info	00
Ciphers: 
	[C02C]	TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
	[C02B]	TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
	[C030]	TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
	[C02F]	TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
	[C024]	TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
	[C023]	TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
	[C028]	TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384
	[C027]	TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	[C00A]	TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
	[C009]	TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
	[C014]	TLS1_CK_ECDHE_RSA_WITH_AES_256_CBC_SHA
	[C013]	TLS1_CK_ECDHE_RSA_WITH_AES_128_CBC_SHA
	[009D]	TLS_RSA_WITH_AES_256_GCM_SHA384
	[009C]	TLS_RSA_WITH_AES_128_GCM_SHA256
	[003D]	TLS_RSA_WITH_AES_256_CBC_SHA256
	[003C]	TLS_RSA_WITH_AES_128_CBC_SHA256
	[0035]	TLS_RSA_AES_256_SHA
	[002F]	TLS_RSA_AES_128_SHA
	[000A]	SSL_RSA_WITH_3DES_EDE_SHA

Compression: 
	[00]	NO_COMPRESSION


</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port">443</stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">app.integration1.volo2.com:443</stringProp>
      <stringProp name="HTTPSampler.method">CONNECT</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/7.55a6b84ceb776b82a5ac.js" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/7.55a6b84ceb776b82a5ac.js</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/7.5c0cdad8ef70f2afe3cf.css" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/7.5c0cdad8ef70f2afe3cf.css</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/3.db4b6c3a5b24c3d97289.js" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/3.db4b6c3a5b24c3d97289.js</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetCountQuery","variables":{},"query":"query GetCountQuery {\n  GetInventory {\n    metadata {\n      overallTotalRecords\n      __typename\n    }\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetInventoryQuery","variables":{"filter":"","sortBy":"title","page":1,"page_size":10,"sku_type":"SINGLE,MASTER"},"query":"query GetInventoryQuery($filter: String, $sortBy: String, $page: Int, $page_size: Int, $sku_type: String) {\n  GetInventory(filter: $filter, sort_by: $sortBy, page: $page, page_size: $page_size, sku_type: $sku_type) {\n    items {\n      title\n      sku\n      imageUrl\n      price {\n        currency\n        value\n        lowestPrice\n        highestPrice\n        __typename\n      }\n      groupName\n      variationCount\n      stockLevel\n      __typename\n    }\n    metadata {\n      overallTotalRecords\n      totalRecords\n      currentSet\n      __typename\n    }\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/3702/I/717/3/Menshorts.jpg" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">images.esellerpro.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/3702/I/717/3/Menshorts.jpg</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/2497/I/246/04/scarf2.jpg" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">images.esellerpro.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/2497/I/246/04/scarf2.jpg</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/2.3fd2a7857c7a08629e29.css" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/2.3fd2a7857c7a08629e29.css</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/2.ba302f920f148d01cf28.js" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/2.ba302f920f148d01cf28.js</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/1.5130a888a2b6f5b31b86.js" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/1.5130a888a2b6f5b31b86.js</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/12.5bec7cfde5f6f59b2245.js" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/12.5bec7cfde5f6f59b2245.js</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetProductList","variables":{},"query":"query GetProductList {\n  GetProductList {\n    sku\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetProduct","variables":{"sku":"Absolute Cardigan"},"query":"query GetProduct($sku: String) {\n  GetValidityMessages(groupId: $sku) {\n    groupId\n    validityPayloads {\n      sku\n      validityData {\n        schema_field\n        volo_channel_id\n        channel_alias\n        state\n        comment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  GetProduct(sku: $sku) {\n    sku\n    productName\n    productDescription\n    imageUrls\n    retailPrice\n    brandName\n    productType\n    manufacturerName\n    searchKeywords\n    model\n    productFeatures\n    material\n    brandType\n    adultProduct\n    costPrice\n    uniqueProductCharacteristic\n    countryOfOrigin\n    category\n    firstVaryingAttribute\n    secondVaryingAttribute\n    ebayGbTitle\n    amzGbTitle\n    htmlDescription\n    categorySpecifics {\n      name\n      value\n      __typename\n    }\n    variations {\n      sku\n      ean\n      retailPrice\n      imageUrl1\n      relationshipInfo {\n        name\n        value\n        __typename\n      }\n      categorySpecifics {\n        name\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetCategories","variables":{},"query":"query GetCategories {\n  GetCategories {\n    id\n    title\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetCategory","variables":{"id":"1730983031--clothing&gt;men&gt;knitwear&gt;cardigans"},"query":"query GetCategory($id: ID!) {\n  GetCategory(id: $id) {\n    id\n    title\n    firstVaryingAttribute\n    secondVaryingAttribute\n    variationFieldNames\n    productAttributes {\n      name\n      title\n      options {\n        label\n        value\n        __typename\n      }\n      dataType\n      multiple\n      __typename\n    }\n    variationFieldPairs {\n      mapName\n      exactName\n      __typename\n    }\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"AddProduct","variables":{"product":{"imageUrl1":"http://images.esellerpro.com/3702/I/717/3/mens_lambswool_cardigan_in_charcoal_2_8.jpg","sku":"Absolute Cardigan","productName":"Absolute cardigan","productDescription":"&lt;p&gt;Absolute cardigan&lt;/p&gt;","retailPrice":"123","brandName":"Volo","productType":"","manufacturerName":"Volo","searchKeywords":"","model":"1232","productFeatures":"Slim Fit, Cardigan","material":"Alpaca","countryOfOrigin":"NP","brandType":"VALUE","adultProduct":false,"costPrice":"112","uniqueProductCharacteristic":"","category":"1730983031--clothing&gt;men&gt;knitwear&gt;cardigans","categorySpecifics":[{"name":"closure_type","value":"popper"},{"name":"seasons","value":"spring-summer"},{"name":"uniqueProductCharacteristic","value":""},{"name":"department_name","value":"men"},{"name":"color_map","value":"orange"},{"name":"country_of_origin","value":"nepal"},{"name":"sleeve_type","value":"long sleeve"},{"name":"outer_material_type","value":"synthetic"},{"name":"special_size_type","value":"tall"},{"name":"collection_name","value":"spring-summer 18"},{"name":"size_map","value":"large"},{"name":"lifestyle","value":"ceremony"}],"variations":[{"sku":"Absolute Cardigan-v1","retailPrice":"123","ean":"5060665131049","imageUrl1":"http://images.esellerpro.com/3702/I/717/3/mens_lambswool_cardigan_in_charcoal_2_8.jpg","categorySpecifics":[{"name":"color_map","value":"orange"},{"name":"size_map","value":"large"}],"relationshipInfo":[{"name":"Exact Size","value":"8"},{"name":"Exact Colour","value":"Marengo"}]},{"sku":"Absolute Cardigan-v2","retailPrice":"123","ean":"5060665131056","imageUrl1":"http://images.esellerpro.com/3702/I/717/3/mens_lambswool_cardigan_in_charcoal_2_8.jpg","categorySpecifics":[{"name":"color_map","value":"orange"},{"name":"size_map","value":"large"}],"relationshipInfo":[{"name":"Exact Size","value":"10"},{"name":"Exact Colour","value":"Peach"}]}],"ebayGbTitle":"Absolute cardigan","amzGbTitle":"Absolute cardigan","htmlDescription":"&lt;html&gt;&lt;body&gt;&lt;p&gt;Rules engine generated Volo description&lt;/p&gt;&lt;p&gt;&lt;p&gt;Absolute cardigan&lt;/p&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;","imageUrls":["http://images.esellerpro.com/3702/I/717/3/mens_lambswool_cardigan_in_charcoal_2_8.jpg","",""]}},"query":"mutation AddProduct($product: ProductInput) {\n  AddProduct(product: $product) {\n    sku\n    productName\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetProduct","variables":{"sku":"AB11740"},"query":"query GetProduct($sku: String) {\n  GetValidityMessages(groupId: $sku) {\n    groupId\n    validityPayloads {\n      sku\n      validityData {\n        schema_field\n        volo_channel_id\n        channel_alias\n        state\n        comment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  GetProduct(sku: $sku) {\n    sku\n    productName\n    productDescription\n    imageUrls\n    retailPrice\n    brandName\n    productType\n    manufacturerName\n    searchKeywords\n    model\n    productFeatures\n    material\n    brandType\n    adultProduct\n    costPrice\n    uniqueProductCharacteristic\n    countryOfOrigin\n    category\n    firstVaryingAttribute\n    secondVaryingAttribute\n    ebayGbTitle\n    amzGbTitle\n    htmlDescription\n    categorySpecifics {\n      name\n      value\n      __typename\n    }\n    variations {\n      sku\n      ean\n      retailPrice\n      imageUrl1\n      relationshipInfo {\n        name\n        value\n        __typename\n      }\n      categorySpecifics {\n        name\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetProductList","variables":{},"query":"query GetProductList {\n  GetProductList {\n    sku\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetProduct","variables":{"sku":"AB11740"},"query":"query GetProduct($sku: String) {\n  GetValidityMessages(groupId: $sku) {\n    groupId\n    validityPayloads {\n      sku\n      validityData {\n        schema_field\n        volo_channel_id\n        channel_alias\n        state\n        comment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  GetProduct(sku: $sku) {\n    sku\n    productName\n    productDescription\n    imageUrls\n    retailPrice\n    brandName\n    productType\n    manufacturerName\n    searchKeywords\n    model\n    productFeatures\n    material\n    brandType\n    adultProduct\n    costPrice\n    uniqueProductCharacteristic\n    countryOfOrigin\n    category\n    firstVaryingAttribute\n    secondVaryingAttribute\n    ebayGbTitle\n    amzGbTitle\n    htmlDescription\n    categorySpecifics {\n      name\n      value\n      __typename\n    }\n    variations {\n      sku\n      ean\n      retailPrice\n      imageUrl1\n      relationshipInfo {\n        name\n        value\n        __typename\n      }\n      categorySpecifics {\n        name\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":"GetCategory","variables":{"id":"1731502031--clothing&gt;women&gt;tops &amp; t-shirts&gt;t-shirts"},"query":"query GetCategory($id: ID!) {\n  GetCategory(id: $id) {\n    id\n    title\n    firstVaryingAttribute\n    secondVaryingAttribute\n    variationFieldNames\n    productAttributes {\n      name\n      title\n      options {\n        label\n        value\n        __typename\n      }\n      dataType\n      multiple\n      __typename\n    }\n    variationFieldPairs {\n      mapName\n      exactName\n      __typename\n    }\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/marketplaces/images/amazon/ab11740_navy_1.jpg" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">cottontradersextra.net</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">http</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/marketplaces/images/amazon/ab11740_navy_1.jpg</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":null,"variables":{},"query":"{\n  GetErrors {\n    count\n    __typename\n  }\n  GetUnrefinedCount {\n    count\n    __typename\n  }\n  GetUnpublishedCount {\n    count\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/svc/graphql" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value">{"operationName":null,"variables":{},"query":"{\n  GetUnpublishedCount {\n    count\n    __typename\n  }\n}\n"}</stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">app.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/svc/graphql</stringProp>
      <stringProp name="HTTPSampler.method">POST</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/protocol/openid-connect/logout?redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/protocol/openid-connect/logout?redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=48b71da2-3399-4245-8a9c-3bff218ee0bf&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=14ad47f6-8df2-4e7a-8b38-c0a0b7f8a390&amp;prompt=none" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=48b71da2-3399-4245-8a9c-3bff218ee0bf&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=14ad47f6-8df2-4e7a-8b38-c0a0b7f8a390&amp;prompt=none</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=3369da0f-63fa-4e71-920f-585b1ad33959&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=ec1ced34-2c3e-44b5-8ae5-0cf670173073" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=3369da0f-63fa-4e71-920f-585b1ad33959&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=ec1ced34-2c3e-44b5-8ae5-0cf670173073</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=9bf6eb14-fe4a-4e61-bdc4-8bbfff4a79fe&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=65da55cd-d2b2-4e7a-94fe-700119d39241" enabled="true">
      <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
        <collectionProp name="Arguments.arguments">
          <elementProp name="" elementType="HTTPArgument">
            <boolProp name="HTTPArgument.always_encode">false</boolProp>
            <stringProp name="Argument.value"></stringProp>
            <stringProp name="Argument.metadata">=</stringProp>
          </elementProp>
        </collectionProp>
      </elementProp>
      <stringProp name="HTTPSampler.domain">auth.integration1.volo2.com</stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
      <stringProp name="HTTPSampler.protocol">https</stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path">/auth/realms/4303/protocol/openid-connect/auth?client_id=web&amp;redirect_uri=https%3A%2F%2Fapp.integration1.volo2.com%2F4303%2F&amp;state=9bf6eb14-fe4a-4e61-bdc4-8bbfff4a79fe&amp;response_mode=fragment&amp;response_type=code&amp;scope=openid&amp;nonce=65da55cd-d2b2-4e7a-94fe-700119d39241</stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <boolProp name="HTTPSampler.monitor">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    </HTTPSamplerProxy>
    <hashTree />
  </hashTree>
</jmeterTestPlan>