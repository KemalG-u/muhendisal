> 🚧 **Durum: aktif geliştirme.** Yazarın kullanımında çalışıyor; arayüzler değişebilir.

# MühendisAl

Anthropic API ile **AI Engineer olmak isteyenler için ücretsiz, Türkçe, açık bir kurs**: 11 bölümde 78 sayfa (ortam kurulumu, prompt, embedding ve vektör arama, RAG, fine-tuning ile RAG karşılaştırması, ajanlar ve MCP, çok kipli (multimodal) uygulamalar, güvenlik, yayına alma, kariyer) ve dört küçük referans proje. MkDocs Material ile hazırlandı.

English: [README.md](README.md)

[ajanmuhendis](https://github.com/KemalG-u/ajanmuhendis) deposundan farkı: bu depo kursun kendisidir (78 sayfa ve dört örnek proje); ajanmuhendis yalnız çıkarılmış küçük bir arka uç ve dashboard kesitidir, ders içermez.

## Neden var

Türkçe AI öğrenme malzemesinin çoğu ya çeviri dökümantasyon ya da yüzeysel "AI nedir" girişleri. Bu kurs aradaki boşluğu hedefler: Türkçe okuyan, kendi başına proje üretmek isteyen yetişkin. Yazar, kendi öğrenme yolculuğunu belgelerken Claude ile birlikte çalıştı; metni yazar yönlendirdi ve gözden geçirdi.

## Depoda ne var

| Yol | İçerik |
|---|---|
| `docs/` | Kurs metni (Türkçe): `bolum-0` ... `bolum-10`, ayrıca `dashboard.md` ve `hakkimda.md` |
| `mkdocs.yml`, `overrides/`, `hooks/`, `includes/` | Site ayarı, tema özelleştirmesi, derleme kancaları, sözlük |
| `backend/` | İsteğe bağlı FastAPI + SQLite API: ilerleme, quiz istatistiği, seri (statik site için gerekmez) |
| `examples/` | Kursta kullanılan dört referans proje: `semantic-search`, `rag-chatbot`, `tahta-asistani`, `icerik-ozet-agent` |
| `scripts/` | Dashboard sayfası üretici, SQLite yedek, yeniden derleme yardımcısı |

## Hızlı başlangıç

Çevrim içi okuma: şu anda herkese açık bir yayın yok; siteyi aşağıdaki gibi kendiniz derleyin.

Siteyi kendin derle:

```bash
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve                      # http://127.0.0.1:8000
mkdocs build                      # statik site ./site klasörüne
```

Site derlemesi hakkında:

- `mkdocs.yml` Material'in `social` eklentisini (Open Graph kartları) açar; bu eklenti Cairo/Pillow sistem kütüphaneleri ister. Kart istemiyorsan eklenti bloğunu sil.
- `rss` eklentisi için `mkdocs-rss-plugin` gerekir; `requirements.txt` içinde sürüm pini olmadan listelidir.
- **Yayına hazırlık sırasında site derlemesi yeniden çalıştırılmadı** (hazırlayan makinede MkDocs kurulu değildi). Yukarıdaki komutlar amaçlanan iş akışıdır; derleme hata verirse issue aç.
- Yayınlamak için `site/` klasörünü herhangi bir statik barındırmaya (GitHub Pages, nginx vb.) yükle. `mkdocs.yml` içindeki `site_url` değerini kendi adresinle değiştir.

Bir örnek projeyi çalıştırmak (her birinin kendi README, `pyproject.toml` ve testi var):

```bash
cd examples/semantic-search
pip install -e ".[dev]"
python -m pytest -q
```

Örnekler gerçek çalıştırmada dış servisleri (Anthropic, Voyage AI, Qdrant) çağırır; birim testler sahte (mock) yanıt kullanır. Kendi API anahtarlarını ortam değişkeniyle ya da yerel `.env` dosyasıyla vermen gerekir (her örneğin README'sine bak).

İsteğe bağlı ilerleme API'si:

```bash
pip install -r backend/requirements.txt
uvicorn backend.main:app --port 9100
```

`MUHENDISAL_CORS_ORIGINS` değişkenine (virgülle ayrılmış) sitenin yayınlandığı adres(ler)i ver. `ecosystem.config.js` PM2 süreç dosyasıdır (`MUHENDISAL_VENV` ve `MUHENDISAL_LOG_DIR` ile yolları değiştirebilirsin).

## Gereksinimler

Örnekler için Python 3.12; MkDocs Material 9.x (`requirements.txt` içinde `<10` pinli); örnekleri gerçek API ile çalıştırmak için Anthropic API anahtarı.

## Sınırlar ve doğrulanmamış iddialar

- Çalışma sürüyor: kurs sayfaları var ve kapsamlı, ama her sayfa sonraki model ve fiyat değişikliklerinden sonra yeniden gözden geçirilmedi. Metindeki fiyat, model adı ve ölçüm değerleri yazıldığı günkü (2026) durumdur ve **otomatik olarak yeniden doğrulanmaz**.
- Site derlemesi ve isteğe bağlı backend bu sürümde yeniden denenmedi; yalnız örnek projelerin birim testleri çalıştırıldı (güncel durum için CI iş akışına bak).
- "Production RAG" vaka çalışması (bölüm 4.8) bir vakıf için yapılmış gerçek bir projeyi anlatır; kurum bilerek adlandırılmamıştır, rakamlar yazarın kendi kayıtlarıdır, bağımsız denetimden geçmemiştir.
- İsteğe bağlı backend'in henüz test seti yok.
- API'ye bağlı bileşenler (ilerleme, XP, quiz istatistiği) yalnız backend çalışırken işler.

## Lisans

- Yazılı kurs içeriği (`docs/`): [CC BY 4.0](LICENSE-CONTENT). "MühendisAl, Kemal (KarıncaAI)" diye atıf ver ve bu depoya bağlantı ekle.
- Kod (`backend/`, `examples/`, `scripts/`, `hooks/`, site JS/CSS): [Apache-2.0](LICENSE).
- Kursta bağlantı verilen ya da alıntılanan üçüncü taraf malzeme kendi lisansında kalır.

## Katkı

[CONTRIBUTING.md](CONTRIBUTING.md) (kurs sayfaları için yazım kuralları) ve [SECURITY.md](SECURITY.md) dosyalarına bak.
