FROM python:3.13
WORKDIR /app

COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv
COPY pyproject.toml uv.lock ./

RUN uv sync --frozen

COPY . .

EXPOSE 8000

CMD ["uv", "run", "python", "-m", "gunicorn", "app.wsgi:application", "--bind", "0.0.0.0:8000"]
